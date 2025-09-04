Prisma setup quick ref

1. Install deps (already in package.json):

```
pnpm i || npm i || yarn
```

2. Configure env in `.env` at `web/`:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/lms?schema=public"
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

3. Run generate and first migration:

```
pnpm prisma:generate
pnpm prisma:migrate:dev --name init
```

4. Open Prisma Studio (optional):

```
pnpm prisma:studio
```
