import * as gameSessionsRepository from "../repositories/gameSessionsRepository.js";

import { ApiError } from "../helpers/api-errors";
import { RoundGetPayload } from "../../generated/prisma/models.js";

type RoundWithGuess = RoundGetPayload<{
  include: {
    guess: true;
  };
}>;

export async function createNewGameSession(playerName: string) {
  const gameSession = await gameSessionsRepository.createNewGameSession(
    playerName
  );

  const sessionDetails = computeSessionDetails(gameSession.rounds);

  return {
    ...gameSession,
    ...sessionDetails,
  };
}

export async function getGameSessionDetails(id: number) {
  const gameSession = await gameSessionsRepository.findGameSessionById(id);

  if (!gameSession) {
    throw new ApiError("Não foi encontrada sessão com o ID fornecido.", 404);
  }

  if (gameSession.rounds.length === 0) {
    throw new ApiError("GameSession apresenta formato inválido.", 500);
  }

  const sessionDetails = computeSessionDetails(gameSession.rounds);

  return {
    ...gameSession,
    ...sessionDetails,
  };
}

function computeSessionDetails(rounds: RoundWithGuess[]) {
  const playedRounds = rounds.filter((round) => round.guess);
  const nonPlayedRounds = rounds.filter((round) => !round.guess);

  const totalRounds = rounds.length;
  const isFinished = playedRounds.length === totalRounds;
  const maxScore = 5000 * totalRounds;

  const totalScore = playedRounds.reduce((acc, curr) => {
    const currentScore = curr.guess?.score || 0;
    return acc + currentScore;
  }, 0);

  const currentRound =
    nonPlayedRounds.length !== 0
      ? nonPlayedRounds[0].round_number
      : rounds.at(-1)!.round_number;

  return {
    currentRound,
    totalRounds,
    isFinished,
    totalScore,
    maxScore,
  };
}
