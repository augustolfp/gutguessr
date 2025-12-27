import { prisma } from "../../config/database.js";
import { GuessUncheckedCreateInput } from "../../generated/prisma/models.js";

export async function addRoundGuess(data: GuessUncheckedCreateInput) {
  const newGuess = await prisma.guess.create({
    data,
  });

  return newGuess;
}
