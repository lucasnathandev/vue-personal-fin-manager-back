const { prisma } = require("./generated/prisma-client");

async function main() {
  await prisma.createUser({
    name: "Lucas Nathan",
    email: "lucas@email.com",
    password: "12345678",
  });

  const users = await prisma.users;

  console.log(("Users:", users));
}

main().catch((e) => console.error(e));
