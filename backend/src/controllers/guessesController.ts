import { Request, Response } from "express";
import * as guessesService from "../services/guessesService";

export async function declareRoundTimeout(req: Request, res: Response) {
  const roundId = req.body.roundId;

  const timeoutInfo = await guessesService.declareRoundTimeout(roundId);

  res.status(201).json(timeoutInfo);
  return;
}

export async function savePlayerRoundGuess(req: Request, res: Response) {
  const { roundId, lat, lng } = req.body;

  const newGuess = await guessesService.savePlayerRoundGuess(roundId, lat, lng);

  res.status(201).json(newGuess);
  return;
}
