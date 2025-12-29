import { Request, Response } from "express";
import * as gameSessionsService from "../services/gameSessionsService";
import * as guessesService from "../services/guessesService";

export async function createNewGameSession(req: Request, res: Response) {
  const playerName: string = req.body.playerName;
  const newGameSession = await gameSessionsService.createNewGameSession(
    playerName
  );

  res.status(201).json(newGameSession);
  return;
}

export async function getGameSessionDetails(req: Request, res: Response) {
  const gameSessionId = req.params.id;
  const gameSession = await gameSessionsService.getGameSessionDetails(
    parseInt(gameSessionId)
  );

  res.status(200).json(gameSession);
  return;
}

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