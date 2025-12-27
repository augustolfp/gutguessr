import { prisma } from "../../config/database.js";
import * as blueprintsRepository from "./blueprintsRepository.js";

export async function createNewGameSession(playerName: string) {
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

  const newGameSession = await prisma.gameSession.create({
    data: {
      title: brumadoBlueprint.title,
      description: brumadoBlueprint.description,
      player_name: playerName,
      rounds: {
        create: roundsArray,
      },
    },
    include: {
      rounds: {
        include: {
          guess: true,
        },
      },
    },
  });

  return newGameSession;
}

export async function findGameSessionById(id: number) {
  return await prisma.gameSession.findUnique({
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
