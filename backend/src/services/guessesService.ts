import { addRoundGuess } from "../repositories/guessesRepository";
import { findRoundById } from "../repositories/roundsRepository";
import computeHaversineDistance from "../utils/computeHaversineDistance";
import computeGuessScore from "../utils/computeGuessScore";

import { ApiError } from "../helpers/api-errors";

export async function declareRoundTimeout(roundId: number) {
  return await addRoundGuess({
    round_id: roundId,
    score: 0,
    timeout: true,
  });
}

export async function savePlayerRoundGuess(
  roundId: number,
  lat: number,
  lng: number
) {
  const round = await findRoundById(roundId);

  if (!round) {
    throw new ApiError("Round não encontrado.", 404);
  }

  if (round.guess) {
    throw new ApiError("Palpite já foi enviado uma vez.", 403);
  }

  const distanceInKm = computeHaversineDistance(
    {
      lat,
      lng,
    },
    {
      lat: round.lat,
      lng: round.lng,
    }
  );

  const score = computeGuessScore(distanceInKm);

  return await addRoundGuess({
    round_id: roundId,
    distance: distanceInKm,
    score,
    lat,
    lng,
    timeout: false,
  });
}
