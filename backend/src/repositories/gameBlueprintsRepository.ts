import { prisma } from "../../config/database.js";

export async function getAllGameBlueprints() {
  return await prisma.gameBlueprint.findMany({
    include: {
      rounds: true,
    },
  });
}
