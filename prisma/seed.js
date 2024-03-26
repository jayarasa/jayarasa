const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcrypt");

async function main() {
  await prisma.user.create({data:{
      email: 'Jayarasafoodinternasional88@gmail.com',
      name: 'Admin Jayarasa',
      username: 'Jayarasa88',
      password: bcrypt.hashSync("jayarasa050324", 13)
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })