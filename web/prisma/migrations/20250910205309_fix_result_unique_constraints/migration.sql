/*
  Warnings:

  - A unique constraint covering the columns `[course_offering_id,student_profile_id,exam_id]` on the table `results` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_offering_id,student_profile_id,assignment_id]` on the table `results` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."results_course_offering_id_student_profile_id_exam_id_assig_key";

-- CreateIndex
CREATE UNIQUE INDEX "results_course_student_exam_key" ON "public"."results"("course_offering_id", "student_profile_id", "exam_id");

-- CreateIndex
CREATE UNIQUE INDEX "results_course_student_assignment_key" ON "public"."results"("course_offering_id", "student_profile_id", "assignment_id");
