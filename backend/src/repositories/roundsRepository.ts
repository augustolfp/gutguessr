import { prisma } from "../../config/database.js";

export async function findRoundById(id: number) {
  return await prisma.round.findUnique({
    where: {
      id,
    },
    include: {
        guess: true
    }
  });
}
