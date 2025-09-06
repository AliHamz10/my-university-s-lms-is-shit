-- Essential database functions for Course and Enrollment domain
-- These functions handle business logic that Prisma can't manage directly

-- Create helper function to check enrollment capacity
CREATE OR REPLACE FUNCTION public.can_enroll(offering_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    offering_capacity INTEGER;
    offering_waitlist_capacity INTEGER;
    current_enrolled_count INTEGER;
    current_waitlisted_count INTEGER;
BEGIN
    -- Get offering capacity and current counts
    SELECT 
        co.capacity,
        co.waitlist_capacity,
        COUNT(CASE WHEN e.status = 'enrolled' THEN 1 END),
        COUNT(CASE WHEN e.status = 'waitlisted' THEN 1 END)
    INTO 
        offering_capacity,
        offering_waitlist_capacity,
        current_enrolled_count,
        current_waitlisted_count
    FROM public.course_offerings co
    LEFT JOIN public.enrollments e ON co.id = e.course_offering_id
    WHERE co.id = offering_id
    GROUP BY co.id, co.capacity, co.waitlist_capacity;
    
    -- Return true if there's capacity for enrollment or waitlist
    RETURN (current_enrolled_count < offering_capacity) OR 
           (current_waitlisted_count < offering_waitlist_capacity);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create helper function to get enrollment status for a student
CREATE OR REPLACE FUNCTION public.get_enrollment_status(offering_id UUID, student_id UUID)
RETURNS "EnrollmentStatus" AS $$
DECLARE
    current_status "EnrollmentStatus";
BEGIN
    SELECT status INTO current_status
    FROM public.enrollments
    WHERE course_offering_id = offering_id 
    AND student_profile_id = student_id;
    
    RETURN COALESCE(current_status, NULL);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to handle enrollment with capacity logic
CREATE OR REPLACE FUNCTION public.enroll_student(
    offering_id UUID,
    student_id UUID
)
RETURNS "EnrollmentStatus" AS $$
DECLARE
    offering_capacity INTEGER;
    offering_waitlist_capacity INTEGER;
    current_enrolled_count INTEGER;
    current_waitlisted_count INTEGER;
    new_status "EnrollmentStatus";
    existing_status "EnrollmentStatus";
BEGIN
    -- Check if already enrolled
    existing_status := public.get_enrollment_status(offering_id, student_id);
    IF existing_status IS NOT NULL THEN
        RETURN existing_status;
    END IF;
    
    -- Get offering capacity and current counts
    SELECT 
        co.capacity,
        co.waitlist_capacity,
        COUNT(CASE WHEN e.status = 'enrolled' THEN 1 END),
        COUNT(CASE WHEN e.status = 'waitlisted' THEN 1 END)
    INTO 
        offering_capacity,
        offering_waitlist_capacity,
        current_enrolled_count,
        current_waitlisted_count
    FROM public.course_offerings co
    LEFT JOIN public.enrollments e ON co.id = e.course_offering_id
    WHERE co.id = offering_id
    GROUP BY co.id, co.capacity, co.waitlist_capacity;
    
    -- Determine enrollment status based on capacity
    IF current_enrolled_count < offering_capacity THEN
        new_status := 'enrolled';
    ELSIF current_waitlisted_count < offering_waitlist_capacity THEN
        new_status := 'waitlisted';
    ELSE
        RAISE EXCEPTION 'Course offering is at capacity and waitlist is full';
    END IF;
    
    -- Insert enrollment
    INSERT INTO public.enrollments (course_offering_id, student_profile_id, status)
    VALUES (offering_id, student_id, new_status);
    
    RETURN new_status;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add comments for documentation
COMMENT ON FUNCTION public.can_enroll(UUID) IS 'Check if a course offering has capacity for enrollment or waitlist';
COMMENT ON FUNCTION public.get_enrollment_status(UUID, UUID) IS 'Get current enrollment status for a student in a course offering';
COMMENT ON FUNCTION public.enroll_student(UUID, UUID) IS 'Enroll a student in a course offering with automatic capacity handling';
