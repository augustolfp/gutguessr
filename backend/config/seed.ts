import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import getAllSeeds from "./seedFilesParser";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Devo truncar as tabelas GameBlueprint e RoundBlueprint antes de executar as seeds?

  const gameBlueprintSeeds = await getAllSeeds();

  for (const seed of gameBlueprintSeeds) {
    const { rounds, ...rest } = seed;

    const formatRounds = rounds.map((round, index) => {
      return {
        round_number: index + 1,
        ...round,
      };
    });

    await prisma.gameBlueprint.create({
      data: {
        ...rest,
        rounds: {
          create: formatRounds,
        },
      },
    });
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
