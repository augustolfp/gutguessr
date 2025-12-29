import { Request, Response } from "express";
import * as guessesService from "../services/guessesService";
import * as gameSessionsService from "../services/gameSessionsService";

export async function declareRoundTimeout(req: Request, res: Response) {
  const roundId = req.body.roundId;
  const gameSessionId = req.body.gameSessionId;

  await guessesService.declareRoundTimeout(roundId);
  const updatedGameSession = await gameSessionsService.getGameSessionDetails(
    gameSessionId
  );

  res.status(201).json(updatedGameSession);
  return;
}

export async function savePlayerRoundGuess(req: Request, res: Response) {
  const { roundId, gameSessionId, lat, lng } = req.body;

  await guessesService.savePlayerRoundGuess(roundId, lat, lng);
  const updatedGameSession = await gameSessionsService.getGameSessionDetails(
    gameSessionId
  );

  res.status(201).json(updatedGameSession);
  return;
}
