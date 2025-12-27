import { Request, Response } from "express";
import * as blueprintsRepository from "../repositories/blueprintsRepository";

export async function getBrumadoQuizBlueprint(req: Request, res: Response) {
  const blueprint = blueprintsRepository.getBrumadoQuizBlueprint();

  res.status(200).json(blueprint);
  return;
}
