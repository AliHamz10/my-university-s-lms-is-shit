-- 001_core.sql
-- Core tables, functions, and triggers for LMS identity and authorization system
-- Supports multi-org with org_id fields, soft deletes, and proper constraints

-- Create ENUM types for better data integrity
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended', 'pending');
CREATE TYPE user_locale AS ENUM ('en', 'es', 'fr', 'de', 'ar', 'ur');

-- Create roles table
CREATE TABLE public.roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ NULL
);

-- Create profiles table (maps to auth.users)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    org_id UUID NULL, -- Multi-org support
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL CHECK (LENGTH(first_name) >= 1 AND LENGTH(first_name) <= 100),
    last_name TEXT NOT NULL CHECK (LENGTH(last_name) >= 1 AND LENGTH(last_name) <= 100),
    username TEXT UNIQUE NULL CHECK (username IS NULL OR (LENGTH(username) >= 3 AND LENGTH(username) <= 50 AND username ~ '^[a-zA-Z0-9_-]+$')),
    avatar_url TEXT NULL CHECK (avatar_url IS NULL OR avatar_url ~ '^https?://'),
    status user_status NOT NULL DEFAULT 'active',
    locale user_locale NOT NULL DEFAULT 'en',
    email_verified_at TIMESTAMPTZ NULL,
    failed_login_attempts INTEGER NOT NULL DEFAULT 0 CHECK (failed_login_attempts >= 0 AND failed_login_attempts <= 10),
    locked_until TIMESTAMPTZ NULL,
    last_login_at TIMESTAMPTZ NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ NULL,
    
    -- Ensure locked_until is in the future when set
    CHECK (locked_until IS NULL OR locked_until > NOW()),
    -- Ensure email_verified_at is not in the future
    CHECK (email_verified_at IS NULL OR email_verified_at <= NOW()),
    -- Ensure last_login_at is not in the future
    CHECK (last_login_at IS NULL OR last_login_at <= NOW())
);

-- Create profile_roles junction table
CREATE TABLE public.profile_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES public.roles(id) ON DELETE RESTRICT,
    org_id UUID NULL, -- Multi-org support
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ NULL,
    
    -- Unique constraint: one role per profile per org (null org_id treated as global)
    UNIQUE (profile_id, role_id, COALESCE(org_id, '00000000-0000-0000-0000-000000000000'::UUID))
);

-- Create indexes for performance
CREATE INDEX idx_roles_key ON public.roles(key) WHERE deleted_at IS NULL;
CREATE INDEX idx_roles_deleted_at ON public.roles(deleted_at);

CREATE INDEX idx_profiles_email ON public.profiles(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_profiles_username ON public.profiles(username) WHERE deleted_at IS NULL AND username IS NOT NULL;
CREATE INDEX idx_profiles_org_id ON public.profiles(org_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_profiles_status ON public.profiles(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_profiles_deleted_at ON public.profiles(deleted_at);

CREATE INDEX idx_profile_roles_profile_id ON public.profile_roles(profile_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_profile_roles_role_id ON public.profile_roles(role_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_profile_roles_org_id ON public.profile_roles(org_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_profile_roles_deleted_at ON public.profile_roles(deleted_at);

-- Create trigger function to maintain updated_at timestamp
CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger function to auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
        COALESCE(NEW.raw_user_meta_data->>'last_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger function for soft delete
CREATE OR REPLACE FUNCTION public.soft_delete()
RETURNS TRIGGER AS $$
BEGIN
    -- Set deleted_at instead of actually deleting
    NEW.deleted_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create has_role helper function for RLS and app code
CREATE OR REPLACE FUNCTION public.has_role(
    profile_id UUID,
    role_key TEXT,
    org_id UUID DEFAULT NULL
)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1
        FROM public.profile_roles pr
        JOIN public.roles r ON pr.role_id = r.id
        WHERE pr.profile_id = has_role.profile_id
        AND r.key = has_role.role_key
        AND (pr.org_id = has_role.org_id OR (pr.org_id IS NULL AND has_role.org_id IS NULL))
        AND pr.deleted_at IS NULL
        AND r.deleted_at IS NULL
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers
CREATE TRIGGER set_timestamp_roles
    BEFORE UPDATE ON public.roles
    FOR EACH ROW
    EXECUTE FUNCTION public.trigger_set_timestamp();

CREATE TRIGGER set_timestamp_profiles
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.trigger_set_timestamp();

CREATE TRIGGER set_timestamp_profile_roles
    BEFORE UPDATE ON public.profile_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.trigger_set_timestamp();

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Add comments for documentation
COMMENT ON TABLE public.roles IS 'System roles for RBAC (Role-Based Access Control)';
COMMENT ON TABLE public.profiles IS 'User profiles linked to auth.users with extended LMS data';
COMMENT ON TABLE public.profile_roles IS 'Many-to-many relationship between profiles and roles';

COMMENT ON COLUMN public.profiles.org_id IS 'Organization ID for multi-tenant support';
COMMENT ON COLUMN public.profiles.username IS 'Optional unique username for login';
COMMENT ON COLUMN public.profiles.email_verified_at IS 'Email verification timestamp';
COMMENT ON COLUMN public.profiles.failed_login_attempts IS 'Count of consecutive failed login attempts';
COMMENT ON COLUMN public.profiles.locked_until IS 'Account lockout expiration time';

COMMENT ON COLUMN public.profile_roles.org_id IS 'Organization context for role assignment (null = global)';
