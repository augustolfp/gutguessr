import { Request, Response } from "express";
import * as quizzesRepository from "../repositories/quizzesRepository";

export async function createNewQuiz(req: Request, res: Response) {
  const playerName: string = req.body.playerName;
  const newQuiz = await quizzesRepository.createNewQuiz(playerName);

  res.status(201).json(newQuiz);
  return;
}
