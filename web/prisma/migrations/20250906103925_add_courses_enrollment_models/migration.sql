/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('active', 'inactive', 'suspended', 'pending');

-- CreateEnum
CREATE TYPE "public"."UserLocale" AS ENUM ('en', 'es', 'fr', 'de', 'ar', 'ur');

-- CreateEnum
CREATE TYPE "public"."ModalityType" AS ENUM ('in_person', 'online', 'hybrid');

-- CreateEnum
CREATE TYPE "public"."EnrollmentStatus" AS ENUM ('enrolled', 'waitlisted', 'dropped', 'completed');

-- CreateEnum
CREATE TYPE "public"."TeachingRole" AS ENUM ('primary', 'co_instructor', 'ta');

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."roles" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profiles" (
    "id" TEXT NOT NULL,
    "org_id" TEXT,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT,
    "avatar_url" TEXT,
    "status" "public"."UserStatus" NOT NULL DEFAULT 'active',
    "locale" "public"."UserLocale" NOT NULL DEFAULT 'en',
    "email_verified_at" TIMESTAMP(3),
    "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
    "locked_until" TIMESTAMP(3),
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profile_roles" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "org_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."departments" (
    "id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."terms" (
    "id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_start" DATE NOT NULL,
    "date_end" DATE NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."courses" (
    "id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "department_id" TEXT,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "credit_hours" INTEGER,
    "created_by" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."course_offerings" (
    "id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "term_id" TEXT NOT NULL,
    "section_code" TEXT NOT NULL,
    "modality" "public"."ModalityType" NOT NULL DEFAULT 'in_person',
    "capacity" INTEGER NOT NULL DEFAULT 30,
    "waitlist_capacity" INTEGER NOT NULL DEFAULT 10,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_offerings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."teaching_assignments" (
    "id" TEXT NOT NULL,
    "course_offering_id" TEXT NOT NULL,
    "instructor_profile_id" TEXT NOT NULL,
    "role" "public"."TeachingRole" NOT NULL DEFAULT 'primary',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "teaching_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."enrollments" (
    "id" TEXT NOT NULL,
    "course_offering_id" TEXT NOT NULL,
    "student_profile_id" TEXT NOT NULL,
    "status" "public"."EnrollmentStatus" NOT NULL DEFAULT 'enrolled',
    "grade_scheme" TEXT,
    "grade_value" TEXT,
    "enrolled_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dropped_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_key_key" ON "public"."roles"("key");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "public"."profiles"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "public"."profiles"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profile_roles_profile_id_role_id_org_id_key" ON "public"."profile_roles"("profile_id", "role_id", "org_id");

-- CreateIndex
CREATE UNIQUE INDEX "departments_org_id_code_key" ON "public"."departments"("org_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "terms_org_id_code_key" ON "public"."terms"("org_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "courses_org_id_code_key" ON "public"."courses"("org_id", "code");

-- CreateIndex
CREATE UNIQUE INDEX "course_offerings_course_id_term_id_section_code_key" ON "public"."course_offerings"("course_id", "term_id", "section_code");

-- CreateIndex
CREATE UNIQUE INDEX "teaching_assignments_course_offering_id_instructor_profile__key" ON "public"."teaching_assignments"("course_offering_id", "instructor_profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_course_offering_id_student_profile_id_key" ON "public"."enrollments"("course_offering_id", "student_profile_id");

-- AddForeignKey
ALTER TABLE "public"."profile_roles" ADD CONSTRAINT "profile_roles_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."profile_roles" ADD CONSTRAINT "profile_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_offerings" ADD CONSTRAINT "course_offerings_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."course_offerings" ADD CONSTRAINT "course_offerings_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "public"."terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."teaching_assignments" ADD CONSTRAINT "teaching_assignments_course_offering_id_fkey" FOREIGN KEY ("course_offering_id") REFERENCES "public"."course_offerings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."teaching_assignments" ADD CONSTRAINT "teaching_assignments_instructor_profile_id_fkey" FOREIGN KEY ("instructor_profile_id") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_course_offering_id_fkey" FOREIGN KEY ("course_offering_id") REFERENCES "public"."course_offerings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."enrollments" ADD CONSTRAINT "enrollments_student_profile_id_fkey" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
