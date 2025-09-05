const { PrismaClient } = require('./src/generated/prisma');

async function verifyTables() {
  const prisma = new PrismaClient();

  try {
    console.log('🔍 Verifying LMS Identity Tables...\n');

    // Check if tables exist by querying them
    const roles = await prisma.role.findMany();
    console.log(`✅ Roles table: ${roles.length} records`);

    const profiles = await prisma.profile.findMany();
    console.log(`✅ Profiles table: ${profiles.length} records`);

    const profileRoles = await prisma.profileRole.findMany();
    console.log(`✅ ProfileRoles table: ${profileRoles.length} records`);

    console.log('\n🎉 All tables created successfully!');
    console.log('\n📋 Available tables:');
    console.log('- roles (Role management)');
    console.log('- profiles (User profiles)');
    console.log('- profile_roles (User-Role assignments)');
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

verifyTables();
