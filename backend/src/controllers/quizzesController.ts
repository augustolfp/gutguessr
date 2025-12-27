import { Request, Response } from "express";
import * as quizzesRepository from "../repositories/quizzesRepository";

export async function createNewQuiz(req: Request, res: Response) {
  const playerName: string = req.body.playerName;
  const newQuiz = await quizzesRepository.createNewQuiz(playerName);

  res.status(201).json(newQuiz);
  return;
}

export async function getQuiz(req: Request, res: Response) {
  const quizId = req.params.id;

  const quiz = await quizzesRepository.findQuizById(parseInt(quizId));
  res.status(200).json(quiz);
  return;
}
