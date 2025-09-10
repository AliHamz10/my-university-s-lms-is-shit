/*
  Warnings:

  - You are about to alter the column `score` on the `submissions` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(6,2)`.
  - A unique constraint covering the columns `[course_offering_id,title]` on the table `assignments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."ExamType" AS ENUM ('quiz', 'midterm', 'final', 'assignment', 'project', 'presentation');

-- CreateEnum
CREATE TYPE "public"."ExamStatus" AS ENUM ('draft', 'published', 'active', 'completed', 'archived');

-- CreateEnum
CREATE TYPE "public"."ResultStatus" AS ENUM ('pending', 'graded', 'approved', 'disputed', 'final');

-- CreateEnum
CREATE TYPE "public"."TranscriptStatus" AS ENUM ('draft', 'pending_approval', 'approved', 'official', 'archived');

-- AlterTable
ALTER TABLE "public"."submissions" ALTER COLUMN "score" SET DATA TYPE DECIMAL(6,2);

-- CreateTable
CREATE TABLE "public"."exams" (
    "id" TEXT NOT NULL,
    "course_offering_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "exam_type" "public"."ExamType" NOT NULL,
    "status" "public"."ExamStatus" NOT NULL DEFAULT 'draft',
    "points" INTEGER NOT NULL DEFAULT 100,
    "time_limit_minutes" INTEGER,
    "max_attempts" INTEGER NOT NULL DEFAULT 1,
    "is_proctored" BOOLEAN NOT NULL DEFAULT false,
    "instructions" TEXT,
    "start_at" TIMESTAMP(3),
    "end_at" TIMESTAMP(3),
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."exam_attempts" (
    "id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "student_profile_id" TEXT NOT NULL,
    "attempt_number" INTEGER NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL,
    "submitted_at" TIMESTAMP(3),
    "time_spent_minutes" INTEGER,
    "score" DECIMAL(6,2),
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "answers" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exam_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."results" (
    "id" TEXT NOT NULL,
    "course_offering_id" TEXT NOT NULL,
    "student_profile_id" TEXT NOT NULL,
    "exam_id" TEXT,
    "assignment_id" TEXT,
    "exam_attempt_id" TEXT,
    "submission_id" TEXT,
    "result_type" "public"."ExamType" NOT NULL,
    "title" TEXT NOT NULL,
    "points_earned" DECIMAL(6,2) NOT NULL,
    "points_possible" DECIMAL(6,2) NOT NULL,
    "percentage" DECIMAL(5,2) NOT NULL,
    "letter_grade" TEXT,
    "status" "public"."ResultStatus" NOT NULL DEFAULT 'pending',
    "graded_at" TIMESTAMP(3),
    "graded_by" TEXT,
    "feedback" TEXT,
    "is_curved" BOOLEAN NOT NULL DEFAULT false,
    "curve_value" DECIMAL(5,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transcripts" (
    "id" TEXT NOT NULL,
    "student_profile_id" TEXT NOT NULL,
    "term_id" TEXT,
    "status" "public"."TranscriptStatus" NOT NULL DEFAULT 'draft',
    "gpa" DECIMAL(3,2),
    "total_credits" INTEGER NOT NULL DEFAULT 0,
    "earned_credits" INTEGER NOT NULL DEFAULT 0,
    "is_official" BOOLEAN NOT NULL DEFAULT false,
    "generated_at" TIMESTAMP(3),
    "generated_by" TEXT,
    "approved_at" TIMESTAMP(3),
    "approved_by" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transcripts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transcript_items" (
    "id" TEXT NOT NULL,
    "transcript_id" TEXT NOT NULL,
    "course_offering_id" TEXT NOT NULL,
    "course_code" TEXT NOT NULL,
    "course_title" TEXT NOT NULL,
    "credit_hours" INTEGER NOT NULL,
    "letter_grade" TEXT,
    "points_earned" DECIMAL(6,2),
    "points_possible" DECIMAL(6,2),
    "percentage" DECIMAL(5,2),
    "term_code" TEXT NOT NULL,
    "term_name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_passed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transcript_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exams_course_offering_id_idx" ON "public"."exams"("course_offering_id");

-- CreateIndex
CREATE INDEX "exams_exam_type_idx" ON "public"."exams"("exam_type");

-- CreateIndex
CREATE INDEX "exams_status_idx" ON "public"."exams"("status");

-- CreateIndex
CREATE INDEX "exams_created_at_idx" ON "public"."exams"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "exams_offering_title_key" ON "public"."exams"("course_offering_id", "title");

-- CreateIndex
CREATE INDEX "exam_attempts_student_profile_id_idx" ON "public"."exam_attempts"("student_profile_id");

-- CreateIndex
CREATE INDEX "exam_attempts_exam_started_at_idx" ON "public"."exam_attempts"("exam_id", "started_at");

-- CreateIndex
CREATE INDEX "exam_attempts_created_at_idx" ON "public"."exam_attempts"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "exam_attempts_exam_id_student_profile_id_attempt_number_key" ON "public"."exam_attempts"("exam_id", "student_profile_id", "attempt_number");

-- CreateIndex
CREATE INDEX "results_student_profile_id_idx" ON "public"."results"("student_profile_id");

-- CreateIndex
CREATE INDEX "results_course_offering_id_idx" ON "public"."results"("course_offering_id");

-- CreateIndex
CREATE INDEX "results_result_type_idx" ON "public"."results"("result_type");

-- CreateIndex
CREATE INDEX "results_status_idx" ON "public"."results"("status");

-- CreateIndex
CREATE INDEX "results_created_at_idx" ON "public"."results"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "results_course_offering_id_student_profile_id_exam_id_assig_key" ON "public"."results"("course_offering_id", "student_profile_id", "exam_id", "assignment_id");

-- CreateIndex
CREATE INDEX "transcripts_student_profile_id_idx" ON "public"."transcripts"("student_profile_id");

-- CreateIndex
CREATE INDEX "transcripts_term_id_idx" ON "public"."transcripts"("term_id");

-- CreateIndex
CREATE INDEX "transcripts_status_idx" ON "public"."transcripts"("status");

-- CreateIndex
CREATE INDEX "transcripts_is_official_idx" ON "public"."transcripts"("is_official");

-- CreateIndex
CREATE INDEX "transcripts_created_at_idx" ON "public"."transcripts"("created_at");

-- CreateIndex
CREATE INDEX "transcript_items_transcript_id_idx" ON "public"."transcript_items"("transcript_id");

-- CreateIndex
CREATE INDEX "transcript_items_course_offering_id_idx" ON "public"."transcript_items"("course_offering_id");

-- CreateIndex
CREATE INDEX "transcript_items_year_semester_idx" ON "public"."transcript_items"("year", "semester");

-- CreateIndex
CREATE INDEX "assignments_course_offering_id_idx" ON "public"."assignments"("course_offering_id");

-- CreateIndex
CREATE INDEX "assignments_created_at_idx" ON "public"."assignments"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "assignments_offering_title_key" ON "public"."assignments"("course_offering_id", "title");

-- CreateIndex
CREATE INDEX "submissions_student_profile_id_idx" ON "public"."submissions"("student_profile_id");

-- CreateIndex
CREATE INDEX "submissions_assignment_submitted_at_idx" ON "public"."submissions"("assignment_id", "submitted_at");

-- CreateIndex
CREATE INDEX "submissions_created_at_idx" ON "public"."submissions"("created_at");

-- AddForeignKey
ALTER TABLE "public"."exams" ADD CONSTRAINT "exams_course_offering_id_fkey" FOREIGN KEY ("course_offering_id") REFERENCES "public"."course_offerings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exams" ADD CONSTRAINT "exams_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exam_attempts" ADD CONSTRAINT "exam_attempts_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exam_attempts" ADD CONSTRAINT "exam_attempts_student_profile_id_fkey" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_course_offering_id_fkey" FOREIGN KEY ("course_offering_id") REFERENCES "public"."course_offerings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_student_profile_id_fkey" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "public"."assignments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_exam_attempt_id_fkey" FOREIGN KEY ("exam_attempt_id") REFERENCES "public"."exam_attempts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "public"."submissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."results" ADD CONSTRAINT "results_graded_by_fkey" FOREIGN KEY ("graded_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcripts" ADD CONSTRAINT "transcripts_student_profile_id_fkey" FOREIGN KEY ("student_profile_id") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcripts" ADD CONSTRAINT "transcripts_term_id_fkey" FOREIGN KEY ("term_id") REFERENCES "public"."terms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcripts" ADD CONSTRAINT "transcripts_generated_by_fkey" FOREIGN KEY ("generated_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcripts" ADD CONSTRAINT "transcripts_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "public"."profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcript_items" ADD CONSTRAINT "transcript_items_transcript_id_fkey" FOREIGN KEY ("transcript_id") REFERENCES "public"."transcripts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transcript_items" ADD CONSTRAINT "transcript_items_course_offering_id_fkey" FOREIGN KEY ("course_offering_id") REFERENCES "public"."course_offerings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
