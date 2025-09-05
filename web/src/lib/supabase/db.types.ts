// db.types.ts
// TypeScript types for LMS identity and authorization system
// Generated from Supabase database schema

export type UserStatus = 'active' | 'inactive' | 'suspended' | 'pending';
export type UserLocale = 'en' | 'es' | 'fr' | 'de' | 'ar' | 'ur';

export interface Role {
  id: string;
  key: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Profile {
  id: string;
  org_id: string | null;
  email: string;
  first_name: string;
  last_name: string;
  username: string | null;
  avatar_url: string | null;
  status: UserStatus;
  locale: UserLocale;
  email_verified_at: string | null;
  failed_login_attempts: number;
  locked_until: string | null;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ProfileRole {
  id: string;
  profile_id: string;
  role_id: string;
  org_id: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

// Extended types with relations
export interface ProfileWithRoles extends Profile {
  roles: (ProfileRole & { role: Role })[];
}

export interface RoleWithProfiles extends Role {
  profiles: (ProfileRole & { profile: Profile })[];
}

// Database function types
export interface HasRoleParams {
  profile_id: string;
  role_key: string;
  org_id?: string | null;
}

export interface IsAdminParams {
  org_id?: string | null;
}

export interface CanAccessProfileParams {
  target_profile_id: string;
}
