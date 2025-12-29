import { addRoundGuess } from "../repositories/guessesRepository";
import computeHaversineDistance from "../utils/computeHaversineDistance";
import computeGuessScore from "../utils/computeGuessScore";
import { getGameSessionDetails } from "./gameSessionsService";

import { ApiError } from "../helpers/api-errors";

export async function computeRoundGuess(
  gameSessionId: number,
  roundNumber: number,
  lat: number,
  lng: number
) {
  const gameSession = await getGameSessionDetails(gameSessionId);

  const round = gameSession.rounds.find(
    ({ round_number }) => round_number === roundNumber
  );

  if (!round) {
    throw new ApiError("Numeração do round não encontrada.", 404);
  }

  if (round.guess) {
    throw new ApiError("Palpite já foi enviado uma vez.", 403);
  }

  if (gameSession.currentRound !== roundNumber) {
    throw new ApiError(
      "É obrigatório enviar os palpites na ordem definida.",
      403
    );
  }

  if (gameSession.isFinished) {
    throw new ApiError("O jogo já foi finalizado", 403);
  }

  const distanceInKm = computeHaversineDistance(
    {
      lat,
      lng,
    },
    {
      lat: round!.lat,
      lng: round!.lng,
    }
  );

  const score = computeGuessScore(distanceInKm);

  await addRoundGuess({
    round_id: round.id,
    distance: distanceInKm,
    score,
    lat,
    lng,
    timeout: false,
  });

  return await getGameSessionDetails(gameSessionId);
}

export async function computeRoundTimeout(
  gameSessionId: number,
  roundNumber: number
) {
  const gameSession = await getGameSessionDetails(gameSessionId);

  const round = gameSession.rounds.find(
    ({ round_number }) => round_number === roundNumber
  );

  if (!round) {
    throw new ApiError("Numeração do round não encontrada.", 404);
  }

  if (round.guess) {
    throw new ApiError("Palpite já foi enviado uma vez.", 403);
  }

  if (gameSession.currentRound !== roundNumber) {
    throw new ApiError(
      "É obrigatório enviar os palpites na ordem definida.",
      403
    );
  }

  if (gameSession.isFinished) {
    throw new ApiError("O jogo já foi finalizado", 403);
  }

  await addRoundGuess({
    round_id: round.id,
    score: 0,
    timeout: true,
  });

  return await getGameSessionDetails(gameSessionId);
}
