import { prisma } from "../../config/database.js";
import * as blueprintsRepository from "./blueprintsRepository.js";

export async function createNewQuiz(playerName: string) {
  const brumadoBlueprint = blueprintsRepository.getBrumadoQuizBlueprint();

  const roundsArray = brumadoBlueprint.rounds.map((round) => {
    return {
      round_number: round.roundNumber,
      max_round_time: round.maxRoundTime,
      max_round_score: round.maxRoundScore,
      lat: round.coordinates.lat,
      lng: round.coordinates.lng,
      heading: round.coordinates.heading,
      pitch: round.coordinates.pitch,
    };
  });

  const newQuiz = await prisma.quiz.create({
    data: {
      title: brumadoBlueprint.title,
      description: brumadoBlueprint.description,
      username: playerName,
      rounds: {
        create: roundsArray,
      },
    },
    include: {
      rounds: true,
    },
  });

  return newQuiz;
}

export async function findQuizById(id: number) {
  return await prisma.quiz.findUnique({
    where: {
      id,
    },
    include: {
      rounds: {
        include: {
          guess: true,
        },
      },
    },
  });
}
