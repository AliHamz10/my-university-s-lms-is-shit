# LMS Identity and Authorization System

This directory contains the database migrations and TypeScript utilities for the LMS identity and authorization system built on Supabase.

## Database Schema

The system includes three main tables:

- `roles` - System roles for RBAC
- `profiles` - User profiles linked to auth.users
- `profile_roles` - Many-to-many relationship between profiles and roles

## Migration Files

1. `001_core.sql` - Core tables, functions, and triggers
2. `002_rls.sql` - Row Level Security policies
3. `003_seed.sql` - Seed data (roles and test users)

## Setup Instructions

### Prerequisites

- Supabase CLI installed
- Supabase project created
- Environment variables configured

### Apply Migrations

#### Option 1: Using Supabase CLI (Recommended)

```bash
# Initialize Supabase in your project (if not already done)
supabase init

# Link to your remote project
supabase link --project-ref YOUR_PROJECT_REF

# Apply all migrations
supabase db push

# Or apply migrations one by one
supabase db push --file migrations/001_core.sql
supabase db push --file migrations/002_rls.sql
supabase db push --file migrations/003_seed.sql
```

#### Option 2: Using psql

```bash
# Connect to your database
psql "postgresql://postgres:[YOUR_PASSWORD]@[YOUR_HOST]:5432/postgres"

# Apply migrations
\i migrations/001_core.sql
\i migrations/002_rls.sql
\i migrations/003_seed.sql
```

### Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Smoke Test Checklist

After applying migrations, verify the following:

### 1. Tables Created

```sql
-- Check if tables exist
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('roles', 'profiles', 'profile_roles');
```

### 2. Roles Seeded

```sql
-- Check if roles were created
SELECT key, name FROM public.roles WHERE deleted_at IS NULL;
```

### 3. Test Admin User

```sql
-- Check if test admin user exists
SELECT email, first_name, last_name FROM public.profiles
WHERE id = '00000000-0000-0000-0000-000000000001';
```

### 4. RLS Policies Active

```sql
-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('roles', 'profiles', 'profile_roles');
```

### 5. Functions Working

```sql
-- Test has_role function
SELECT public.has_role('00000000-0000-0000-0000-000000000001', 'ADMIN', NULL);

-- Test is_admin function
SELECT public.is_admin(NULL);
```

## Usage Examples

### TypeScript/JavaScript

```typescript
import { hasRole, grantRole, getUserRoles } from './supabase/auth.utils';

// Check if user has admin role
const isAdmin = await hasRole(userId, 'ADMIN');

// Grant faculty role to user
await grantRole(userId, 'FACULTY', orgId);

// Get user's roles
const roles = await getUserRoles(userId);
```

### SQL Queries

```sql
-- Grant a role to a user
INSERT INTO public.profile_roles (profile_id, role_id, org_id)
SELECT
    'user-uuid-here',
    r.id,
    'org-uuid-here'
FROM public.roles r
WHERE r.key = 'FACULTY';

-- Check user's roles
SELECT r.key, r.name
FROM public.profile_roles pr
JOIN public.roles r ON pr.role_id = r.id
WHERE pr.profile_id = 'user-uuid-here'
AND pr.deleted_at IS NULL;
```

## Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Multi-org support** with org_id fields
- **Soft deletes** for data retention
- **Account lockout** protection
- **Email verification** tracking
- **Audit trails** with created_at/updated_at timestamps

## Troubleshooting

### Common Issues

1. **Migration fails**: Check if Supabase project is linked correctly
2. **RLS policies not working**: Verify user is authenticated
3. **Functions not found**: Ensure migrations were applied in order
4. **Permission denied**: Check if user has required roles

### Debug Queries

```sql
-- Check current user
SELECT auth.uid();

-- Check user's roles
SELECT r.key, r.name
FROM public.profile_roles pr
JOIN public.roles r ON pr.role_id = r.id
WHERE pr.profile_id = auth.uid()
AND pr.deleted_at IS NULL;

-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE schemaname = 'public';
```
