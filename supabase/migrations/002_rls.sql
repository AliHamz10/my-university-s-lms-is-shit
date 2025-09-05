-- 002_rls.sql
-- Row Level Security policies for LMS identity and authorization system
-- Enables RLS and creates security policies for profiles, roles, and profile_roles

-- Enable RLS on all tables
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for roles table
-- Anyone can read roles (needed for role selection in UI)
CREATE POLICY "Anyone can read roles" ON public.roles
    FOR SELECT
    TO authenticated
    USING (deleted_at IS NULL);

-- Only admins can insert/update/delete roles
CREATE POLICY "Admins can manage roles" ON public.roles
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profile_roles pr
            JOIN public.roles r ON pr.role_id = r.id
            WHERE pr.profile_id = auth.uid()
            AND r.key = 'ADMIN'
            AND pr.org_id IS NULL  -- Only global admins can manage roles
            AND pr.deleted_at IS NULL
        )
    );

-- RLS Policies for profiles table
-- Users can read and update their own profile
CREATE POLICY "Users can manage own profile" ON public.profiles
    FOR SELECT
    TO authenticated
    USING (id = auth.uid() AND deleted_at IS NULL);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (id = auth.uid() AND deleted_at IS NULL);

-- Users can insert their own profile (handled by trigger, but need policy)
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (id = auth.uid());

-- Admins can read all profiles in their org or globally
CREATE POLICY "Admins can read profiles in org" ON public.profiles
    FOR SELECT
    TO authenticated
    USING (
        deleted_at IS NULL AND (
            -- Global admin can see all profiles
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND pr.org_id IS NULL
                AND pr.deleted_at IS NULL
            )
            OR
            -- Org admin can see profiles in same org (including null org_id profiles)
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND (pr.org_id = profiles.org_id OR (pr.org_id IS NULL AND profiles.org_id IS NULL))
                AND pr.deleted_at IS NULL
            )
        )
    );

-- Admins can update profiles in their org or globally
CREATE POLICY "Admins can update profiles in org" ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (
        deleted_at IS NULL AND (
            -- Global admin can update all profiles
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND pr.org_id IS NULL
                AND pr.deleted_at IS NULL
            )
            OR
            -- Org admin can update profiles in same org (including null org_id profiles)
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND (pr.org_id = profiles.org_id OR (pr.org_id IS NULL AND profiles.org_id IS NULL))
                AND pr.deleted_at IS NULL
            )
        )
    );

-- RLS Policies for profile_roles table
-- Users can read their own role assignments
CREATE POLICY "Users can read own roles" ON public.profile_roles
    FOR SELECT
    TO authenticated
    USING (profile_id = auth.uid() AND deleted_at IS NULL);

-- Admins can manage role assignments in their org or globally
CREATE POLICY "Admins can manage roles in org" ON public.profile_roles
    FOR ALL
    TO authenticated
    USING (
        deleted_at IS NULL AND (
            -- Global admin can manage all role assignments
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND pr.org_id IS NULL
                AND pr.deleted_at IS NULL
            )
            OR
            -- Org admin can manage role assignments in same org (including null org_id)
            EXISTS (
                SELECT 1 FROM public.profile_roles pr
                JOIN public.roles r ON pr.role_id = r.id
                WHERE pr.profile_id = auth.uid()
                AND r.key = 'ADMIN'
                AND (pr.org_id = profile_roles.org_id OR (pr.org_id IS NULL AND profile_roles.org_id IS NULL))
                AND pr.deleted_at IS NULL
            )
        )
    );

-- Create helper function to check if user is admin (for use in policies)
CREATE OR REPLACE FUNCTION public.is_admin(org_id UUID DEFAULT NULL)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profile_roles pr
        JOIN public.roles r ON pr.role_id = r.id
        WHERE pr.profile_id = auth.uid()
        AND r.key = 'ADMIN'
        AND (pr.org_id = is_admin.org_id OR (pr.org_id IS NULL AND is_admin.org_id IS NULL))
        AND pr.deleted_at IS NULL
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create helper function to check if user can access profile
CREATE OR REPLACE FUNCTION public.can_access_profile(target_profile_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
    target_org_id UUID;
BEGIN
    -- Get the target profile's org_id
    SELECT org_id INTO target_org_id
    FROM public.profiles
    WHERE id = target_profile_id AND deleted_at IS NULL;
    
    -- User can access if it's their own profile or they're an admin
    RETURN target_profile_id = auth.uid() OR public.is_admin(target_org_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add comments for documentation
COMMENT ON FUNCTION public.is_admin(UUID) IS 'Check if current user has ADMIN role in specified org (null = global)';
COMMENT ON FUNCTION public.can_access_profile(UUID) IS 'Check if current user can access a specific profile';
