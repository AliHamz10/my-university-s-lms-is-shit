const { PrismaClient } = require('./src/generated/prisma');

async function seedDatabase() {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DIRECT_URL,
      },
    },
  });

  try {
    console.log('🌱 Seeding LMS Identity Database...\n');

    // Create roles
    const roles = await Promise.all([
      prisma.role.upsert({
        where: { key: 'ADMIN' },
        update: {},
        create: {
          key: 'ADMIN',
          name: 'Administrator',
          description: 'Full system access and user management',
        },
      }),
      prisma.role.upsert({
        where: { key: 'FACULTY' },
        update: {},
        create: {
          key: 'FACULTY',
          name: 'Faculty Member',
          description: 'Teaching staff with course management access',
        },
      }),
      prisma.role.upsert({
        where: { key: 'STUDENT' },
        update: {},
        create: {
          key: 'STUDENT',
          name: 'Student',
          description: 'Student with access to enrolled courses',
        },
      }),
      prisma.role.upsert({
        where: { key: 'TA' },
        update: {},
        create: {
          key: 'TA',
          name: 'Teaching Assistant',
          description: 'Teaching assistant with limited course access',
        },
      }),
      prisma.role.upsert({
        where: { key: 'DEPT_ADMIN' },
        update: {},
        create: {
          key: 'DEPT_ADMIN',
          name: 'Department Administrator',
          description: 'Department-level administrative access',
        },
      }),
    ]);

    console.log(`✅ Created ${roles.length} roles`);

    // Create test admin profile
    const adminProfile = await prisma.profile.upsert({
      where: { email: 'admin@university.edu' },
      update: {},
      create: {
        email: 'admin@university.edu',
        firstName: 'System',
        lastName: 'Administrator',
        username: 'admin',
        status: 'active',
        emailVerifiedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
      },
    });

    console.log(`✅ Created admin profile: ${adminProfile.email}`);

    // Assign ADMIN role to admin profile
    const adminRole = roles.find(r => r.key === 'ADMIN');
    await prisma.profileRole.create({
      data: {
        profileId: adminProfile.id,
        roleId: adminRole.id,
        orgId: null, // Global admin
      },
    });

    console.log(`✅ Assigned ADMIN role to admin profile`);

    // Create test faculty profile
    const facultyProfile = await prisma.profile.upsert({
      where: { email: 'faculty@university.edu' },
      update: {},
      create: {
        email: 'faculty@university.edu',
        firstName: 'John',
        lastName: 'Professor',
        username: 'jprofessor',
        status: 'active',
        emailVerifiedAt: new Date(),
        failedLoginAttempts: 0,
        lastLoginAt: new Date(),
      },
    });

    console.log(`✅ Created faculty profile: ${facultyProfile.email}`);

    // Assign FACULTY role to faculty profile
    const facultyRole = roles.find(r => r.key === 'FACULTY');
    await prisma.profileRole.create({
      data: {
        profileId: facultyProfile.id,
        roleId: facultyRole.id,
        orgId: null,
      },
    });

    console.log(`✅ Assigned FACULTY role to faculty profile`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`- ${roles.length} roles created`);
    console.log(`- 2 test profiles created`);
    console.log(`- 2 role assignments created`);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
