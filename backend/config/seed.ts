import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { getLocationsList } from "./locationsParser";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const numberOfLocations = await prisma.location.count();

  if (numberOfLocations !== 0) {
    console.info("Tabela Location já está populada. Seed não será executada.");
  }

  if (numberOfLocations === 0) {
    const locationsList = await getLocationsList();

    await prisma.location.createMany({
      data: locationsList,
    });

    console.info("Tabela Location populada através de Seed.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
