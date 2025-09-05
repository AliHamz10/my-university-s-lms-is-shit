-- 003_seed.sql
-- Seed data for LMS identity and authorization system
-- Creates base roles and optional test admin user

-- Insert base roles (idempotent - can be run multiple times)
INSERT INTO public.roles (key, name, description) VALUES
    ('ADMIN', 'Administrator', 'Full system access and user management'),
    ('FACULTY', 'Faculty Member', 'Teaching staff with course management access'),
    ('STUDENT', 'Student', 'Student with access to enrolled courses'),
    ('TA', 'Teaching Assistant', 'Teaching assistant with limited course access'),
    ('DEPT_ADMIN', 'Department Administrator', 'Department-level administrative access')
ON CONFLICT (key) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

-- Create test admin user (replace with actual UUID if needed)
-- This creates a profile that can be used for testing
INSERT INTO public.profiles (
    id,
    email,
    first_name,
    last_name,
    username,
    status,
    email_verified_at
) VALUES (
    '00000000-0000-0000-0000-000000000001'::UUID, -- Test admin UUID
    'admin@university.edu',
    'Test',
    'Administrator',
    'admin',
    'active',
    NOW()
) ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    username = EXCLUDED.username,
    updated_at = NOW();

-- Assign ADMIN role to test admin user
INSERT INTO public.profile_roles (profile_id, role_id, org_id)
SELECT 
    '00000000-0000-0000-0000-000000000001'::UUID,
    r.id,
    NULL -- Global admin
FROM public.roles r
WHERE r.key = 'ADMIN'
ON CONFLICT (profile_id, role_id, COALESCE(org_id, '00000000-0000-0000-0000-000000000000'::UUID))
DO NOTHING;

-- Create a test organization for multi-org testing
-- This is optional and can be removed if not needed
INSERT INTO public.profiles (
    id,
    email,
    first_name,
    last_name,
    username,
    org_id,
    status,
    email_verified_at
) VALUES (
    '00000000-0000-0000-0000-000000000002'::UUID, -- Test org admin UUID
    'dept-admin@university.edu',
    'Department',
    'Administrator',
    'dept_admin',
    '00000000-0000-0000-0000-000000000010'::UUID, -- Test org ID
    'active',
    NOW()
) ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    username = EXCLUDED.username,
    org_id = EXCLUDED.org_id,
    updated_at = NOW();

-- Assign DEPT_ADMIN role to test org admin
INSERT INTO public.profile_roles (profile_id, role_id, org_id)
SELECT 
    '00000000-0000-0000-0000-000000000002'::UUID,
    r.id,
    '00000000-0000-0000-0000-000000000010'::UUID -- Test org ID
FROM public.roles r
WHERE r.key = 'DEPT_ADMIN'
ON CONFLICT (profile_id, role_id, COALESCE(org_id, '00000000-0000-0000-0000-000000000000'::UUID))
DO NOTHING;

-- Add comments for documentation
COMMENT ON TABLE public.roles IS 'Seeded with base LMS roles: ADMIN, FACULTY, STUDENT, TA, DEPT_ADMIN';
COMMENT ON TABLE public.profiles IS 'Test admin user created with ID 00000000-0000-0000-0000-000000000001';
