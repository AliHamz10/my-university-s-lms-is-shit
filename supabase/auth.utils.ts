// auth.utils.ts
// Authentication and authorization utilities for LMS
// Uses Supabase client and database functions

import { createClient } from '@supabase/supabase-js';
import type { HasRoleParams, IsAdminParams, CanAccessProfileParams } from './db.types';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Check if a user has a specific role
 * @param profileId - User's profile ID
 * @param roleKey - Role key to check (e.g., 'ADMIN', 'FACULTY')
 * @param orgId - Organization ID (null for global roles)
 * @returns Promise<boolean>
 */
export async function hasRole(
  profileId: string,
  roleKey: string,
  orgId: string | null = null
): Promise<boolean> {
  const { data, error } = await supabase.rpc('has_role', {
    profile_id: profileId,
    role_key: roleKey,
    org_id: orgId
  });

  if (error) {
    console.error('Error checking role:', error);
    return false;
  }

  return data || false;
}

/**
 * Check if current user is admin
 * @param orgId - Organization ID (null for global admin)
 * @returns Promise<boolean>
 */
export async function isAdmin(orgId: string | null = null): Promise<boolean> {
  const { data, error } = await supabase.rpc('is_admin', {
    org_id: orgId
  });

  if (error) {
    console.error('Error checking admin status:', error);
    return false;
  }

  return data || false;
}

/**
 * Check if current user can access a specific profile
 * @param targetProfileId - Profile ID to check access for
 * @returns Promise<boolean>
 */
export async function canAccessProfile(targetProfileId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('can_access_profile', {
    target_profile_id: targetProfileId
  });

  if (error) {
    console.error('Error checking profile access:', error);
    return false;
  }

  return data || false;
}

/**
 * Grant a role to a user
 * @param profileId - User's profile ID
 * @param roleKey - Role key to grant
 * @param orgId - Organization ID (null for global role)
 * @returns Promise<boolean> - Success status
 */
export async function grantRole(
  profileId: string,
  roleKey: string,
  orgId: string | null = null
): Promise<boolean> {
  // First, get the role ID
  const { data: role, error: roleError } = await supabase
    .from('roles')
    .select('id')
    .eq('key', roleKey)
    .eq('deleted_at', null)
    .single();

  if (roleError || !role) {
    console.error('Error finding role:', roleError);
    return false;
  }

  // Insert the role assignment
  const { error } = await supabase
    .from('profile_roles')
    .insert({
      profile_id: profileId,
      role_id: role.id,
      org_id: orgId
    });

  if (error) {
    console.error('Error granting role:', error);
    return false;
  }

  return true;
}

/**
 * Revoke a role from a user
 * @param profileId - User's profile ID
 * @param roleKey - Role key to revoke
 * @param orgId - Organization ID (null for global role)
 * @returns Promise<boolean> - Success status
 */
export async function revokeRole(
  profileId: string,
  roleKey: string,
  orgId: string | null = null
): Promise<boolean> {
  // First, get the role ID
  const { data: role, error: roleError } = await supabase
    .from('roles')
    .select('id')
    .eq('key', roleKey)
    .eq('deleted_at', null)
    .single();

  if (roleError || !role) {
    console.error('Error finding role:', roleError);
    return false;
  }

  // Soft delete the role assignment
  const { error } = await supabase
    .from('profile_roles')
    .update({ deleted_at: new Date().toISOString() })
    .eq('profile_id', profileId)
    .eq('role_id', role.id)
    .eq('org_id', orgId);

  if (error) {
    console.error('Error revoking role:', error);
    return false;
  }

  return true;
}

/**
 * Get user's roles
 * @param profileId - User's profile ID
 * @param orgId - Organization ID (null for global roles)
 * @returns Promise<Role[]>
 */
export async function getUserRoles(profileId: string, orgId: string | null = null) {
  const { data, error } = await supabase
    .from('profile_roles')
    .select(`
      role:roles(*)
    `)
    .eq('profile_id', profileId)
    .eq('org_id', orgId)
    .eq('deleted_at', null);

  if (error) {
    console.error('Error fetching user roles:', error);
    return [];
  }

  return data?.map(item => item.role) || [];
}

/**
 * Get all users with a specific role
 * @param roleKey - Role key to search for
 * @param orgId - Organization ID (null for global roles)
 * @returns Promise<Profile[]>
 */
export async function getUsersWithRole(roleKey: string, orgId: string | null = null) {
  const { data, error } = await supabase
    .from('profile_roles')
    .select(`
      profile:profiles(*)
    `)
    .eq('role:roles.key', roleKey)
    .eq('org_id', orgId)
    .eq('deleted_at', null);

  if (error) {
    console.error('Error fetching users with role:', error);
    return [];
  }

  return data?.map(item => item.profile) || [];
}
