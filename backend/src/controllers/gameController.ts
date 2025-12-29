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

export async function computeRoundGuess(req: Request, res: Response) {
  const gameSessionId = parseInt(req.params.gameSessionId);
  const roundNumber = parseInt(req.params.roundNumber);
  const {
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  } = req.body;

  const result = await guessesService.computeRoundGuess(
    gameSessionId,
    roundNumber,
    lat,
    lng
  );

  res.status(201).json(result);
  return;
}

export async function computeRoundTimeout(req: Request, res: Response) {
  const gameSessionId = parseInt(req.params.gameSessionId);
  const roundNumber = parseInt(req.params.roundNumber);

  const result = await guessesService.computeRoundTimeout(gameSessionId, roundNumber);

  res.status(201).json(result);
  return;
}
