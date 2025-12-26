import { Request, Response } from "express";
import * as quizzesRepository from "../repositories/quizzesRepository";

export async function getBrumadoQuizBlueprint(req: Request, res: Response) {
  const blueprint = quizzesRepository.getBrumadoQuizBlueprint();

  res.status(200).json(blueprint);
  return;
}
