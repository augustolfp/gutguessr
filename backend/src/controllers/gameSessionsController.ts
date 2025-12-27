import { Request, Response } from "express";
import * as gameSessionsRepository from "../repositories/gameSessionsRepository";

export async function createNewGameSession(req: Request, res: Response) {
  const playerName: string = req.body.playerName;
  const newGameSession = await gameSessionsRepository.createNewGameSession(
    playerName
  );

  res.status(201).json(newGameSession);
  return;
}

export async function getGameSession(req: Request, res: Response) {
  const gameSessionId = req.params.id;
  const gameSession = await gameSessionsRepository.findGameSessionById(
    parseInt(gameSessionId)
  );

  res.status(200).json(gameSession);
  return;
}
