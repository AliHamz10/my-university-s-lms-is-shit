import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create test organization
  const testOrgId = '00000000-0000-0000-0000-000000000010';
  const testAdminId = '00000000-0000-0000-0000-000000000001';

  // Create test admin profile first
  const testAdmin = await prisma.profile.upsert({
    where: { id: testAdminId },
    update: {},
    create: {
      id: testAdminId,
      email: 'admin@university.edu',
      firstName: 'System',
      lastName: 'Administrator',
      username: 'admin',
      status: 'active',
      locale: 'en',
      emailVerifiedAt: new Date(),
      lastLoginAt: new Date(),
    },
  });

  console.log('✅ Test admin profile created');

  // Create departments
  const csDept = await prisma.department.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'CS'
      }
    },
    update: {},
    create: {
      id: '11111111-1111-1111-1111-111111111111',
      orgId: testOrgId,
      code: 'CS',
      name: 'Computer Science',
    },
  });

  const mathDept = await prisma.department.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'MATH'
      }
    },
    update: {},
    create: {
      id: '22222222-2222-2222-2222-222222222222',
      orgId: testOrgId,
      code: 'MATH',
      name: 'Mathematics',
    },
  });

  console.log('✅ Departments created');

  // Create terms
  const springTerm = await prisma.term.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'SP25'
      }
    },
    update: {},
    create: {
      id: '33333333-3333-3333-3333-333333333333',
      orgId: testOrgId,
      code: 'SP25',
      name: 'Spring 2025',
      dateStart: new Date('2025-01-15'),
      dateEnd: new Date('2025-05-15'),
      isActive: true,
    },
  });

  const fallTerm = await prisma.term.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'FA25'
      }
    },
    update: {},
    create: {
      id: '44444444-4444-4444-4444-444444444444',
      orgId: testOrgId,
      code: 'FA25',
      name: 'Fall 2025',
      dateStart: new Date('2025-08-25'),
      dateEnd: new Date('2025-12-15'),
      isActive: true,
    },
  });

  console.log('✅ Terms created');

  // Create courses
  const cs101 = await prisma.course.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'CS101'
      }
    },
    update: {},
    create: {
      id: '55555555-5555-5555-5555-555555555555',
      orgId: testOrgId,
      departmentId: csDept.id,
      code: 'CS101',
      title: 'Introduction to Programming',
      description: 'Basic programming concepts using Python',
      creditHours: 3,
      createdById: testAdminId, // Test admin
      isActive: true,
    },
  });

  const math101 = await prisma.course.upsert({
    where: { 
      orgId_code: {
        orgId: testOrgId,
        code: 'MATH101'
      }
    },
    update: {},
    create: {
      id: '66666666-6666-6666-6666-666666666666',
      orgId: testOrgId,
      departmentId: mathDept.id,
      code: 'MATH101',
      title: 'Calculus I',
      description: 'Differential and integral calculus',
      creditHours: 4,
      createdById: testAdminId, // Test admin
      isActive: true,
    },
  });

  console.log('✅ Courses created');

  // Create course offerings
  const cs101Offering = await prisma.courseOffering.upsert({
    where: { 
      courseId_termId_sectionCode: {
        courseId: cs101.id,
        termId: springTerm.id,
        sectionCode: 'A'
      }
    },
    update: {},
    create: {
      id: '77777777-7777-7777-7777-777777777777',
      orgId: testOrgId,
      courseId: cs101.id,
      termId: springTerm.id,
      sectionCode: 'A',
      modality: 'in_person',
      capacity: 30,
      waitlistCapacity: 10,
      isPublished: true,
    },
  });

  const math101Offering = await prisma.courseOffering.upsert({
    where: { 
      courseId_termId_sectionCode: {
        courseId: math101.id,
        termId: springTerm.id,
        sectionCode: 'A'
      }
    },
    update: {},
    create: {
      id: '88888888-8888-8888-8888-888888888888',
      orgId: testOrgId,
      courseId: math101.id,
      termId: springTerm.id,
      sectionCode: 'A',
      modality: 'in_person',
      capacity: 25,
      waitlistCapacity: 5,
      isPublished: true,
    },
  });

  console.log('✅ Course offerings created');

  // Create teaching assignments
  await prisma.teachingAssignment.upsert({
    where: { 
      courseOfferingId_instructorProfileId: {
        courseOfferingId: cs101Offering.id,
        instructorProfileId: '00000000-0000-0000-0000-000000000001'
      }
    },
    update: {},
    create: {
      id: '99999999-9999-9999-9999-999999999999',
      courseOfferingId: cs101Offering.id,
        instructorProfileId: testAdminId,
      role: 'primary',
    },
  });

  await prisma.teachingAssignment.upsert({
    where: { 
      courseOfferingId_instructorProfileId: {
        courseOfferingId: math101Offering.id,
        instructorProfileId: '00000000-0000-0000-0000-000000000001'
      }
    },
    update: {},
    create: {
      id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
      courseOfferingId: math101Offering.id,
        instructorProfileId: testAdminId,
      role: 'primary',
    },
  });

  console.log('✅ Teaching assignments created');
  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
