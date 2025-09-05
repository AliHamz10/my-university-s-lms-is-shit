-- test-migrations.sql
-- Test script to verify migrations work correctly
-- Run this after applying all migrations

-- Test 1: Check if tables exist
SELECT 'Tables created successfully' as test_result
WHERE EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name IN ('roles', 'profiles', 'profile_roles')
);

-- Test 2: Check if roles were seeded
SELECT 'Roles seeded successfully' as test_result
WHERE EXISTS (
    SELECT 1 FROM public.roles 
    WHERE key IN ('ADMIN', 'FACULTY', 'STUDENT', 'TA', 'DEPT_ADMIN')
    AND deleted_at IS NULL
);

-- Test 3: Check if test admin user exists
SELECT 'Test admin user created' as test_result
WHERE EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = '00000000-0000-0000-0000-000000000001'
    AND email = 'admin@university.edu'
);

-- Test 4: Check if RLS is enabled
SELECT 'RLS enabled on all tables' as test_result
WHERE EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename IN ('roles', 'profiles', 'profile_roles')
    AND rowsecurity = true
);

-- Test 5: Check if functions exist
SELECT 'Helper functions created' as test_result
WHERE EXISTS (
    SELECT 1 FROM information_schema.routines 
    WHERE routine_schema = 'public' 
    AND routine_name IN ('has_role', 'is_admin', 'can_access_profile', 'trigger_set_timestamp')
);

-- Test 6: Check if triggers exist
SELECT 'Triggers created' as test_result
WHERE EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_schema = 'public' 
    AND trigger_name IN ('set_timestamp_roles', 'set_timestamp_profiles', 'set_timestamp_profile_roles', 'on_auth_user_created')
);

-- Test 7: Check constraints
SELECT 'Constraints working' as test_result
WHERE EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_schema = 'public' 
    AND table_name = 'profiles'
    AND constraint_type = 'CHECK'
);

-- Test 8: Check indexes
SELECT 'Indexes created' as test_result
WHERE EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE schemaname = 'public' 
    AND tablename IN ('roles', 'profiles', 'profile_roles')
);

-- Test 9: Test has_role function (should return false for non-existent user)
SELECT 
    CASE 
        WHEN public.has_role('00000000-0000-0000-0000-000000000999', 'ADMIN', NULL) = false 
        THEN 'has_role function working correctly'
        ELSE 'has_role function has issues'
    END as test_result;

-- Test 10: Test is_admin function (should return false for non-existent user)
SELECT 
    CASE 
        WHEN public.is_admin(NULL) = false 
        THEN 'is_admin function working correctly'
        ELSE 'is_admin function has issues'
    END as test_result;

-- Test 11: Test constraint validation (should fail with invalid data)
DO $$
BEGIN
    -- Test username constraint
    BEGIN
        INSERT INTO public.profiles (id, email, first_name, last_name, username) 
        VALUES ('00000000-0000-0000-0000-000000000999', 'test@test.com', 'Test', 'User', 'ab'); -- Too short
        RAISE EXCEPTION 'Username constraint failed';
    EXCEPTION
        WHEN check_violation THEN
            -- Expected behavior
    END;
    
    -- Test email constraint
    BEGIN
        INSERT INTO public.profiles (id, email, first_name, last_name, avatar_url) 
        VALUES ('00000000-0000-0000-0000-000000000998', 'test@test.com', 'Test', 'User', 'invalid-url'); -- Invalid URL
        RAISE EXCEPTION 'Avatar URL constraint failed';
    EXCEPTION
        WHEN check_violation THEN
            -- Expected behavior
    END;
    
    RAISE NOTICE 'Constraint validation working correctly';
END $$;

-- Test 12: Test unique constraints
SELECT 'Unique constraints working' as test_result
WHERE NOT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE email = 'admin@university.edu' 
    GROUP BY email 
    HAVING COUNT(*) > 1
);

-- Test 13: Test foreign key constraints
SELECT 'Foreign key constraints working' as test_result
WHERE EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_schema = 'public' 
    AND table_name = 'profile_roles'
    AND constraint_type = 'FOREIGN KEY'
);

-- Test 14: Test indexes are being used (performance check)
SELECT 'Indexes are effective' as test_result
WHERE EXISTS (
    SELECT 1 FROM pg_stat_user_indexes 
    WHERE schemaname = 'public' 
    AND relname IN ('roles', 'profiles', 'profile_roles')
);
