import * as gameSessionsRepository from "../repositories/gameSessionsRepository.js";

import { ApiError } from "../helpers/api-errors";

export async function getGameSessionDetails(id: number) {
  const gameSession = await gameSessionsRepository.findGameSessionById(id);

  if (!gameSession) {
    throw new ApiError("Não foi encontrada sessão com o ID fornecido.", 404);
  }

  if (gameSession.rounds.length === 0) {
    throw new ApiError("GameSession apresenta formato inválido.", 500);
  }

  const playedRounds = gameSession.rounds.filter((round) => round.guess);
  const nonPlayedRounds = gameSession.rounds.filter((round) => !round.guess);

  const totalRounds = gameSession.rounds.length;
  const isFinished = playedRounds.length === totalRounds;

  let currentRound: number = 0;

  if (nonPlayedRounds.length !== 0) {
    currentRound = nonPlayedRounds[0].round_number;
  }
  if (nonPlayedRounds.length === 0) {
    currentRound = gameSession.rounds.at(-1)!.round_number;
  }

  return {
    ...gameSession,
    currentRound,
    totalRounds,
    isFinished,
  };
}
