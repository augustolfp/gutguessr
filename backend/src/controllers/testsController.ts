import { Request, Response } from "express";
import { getAllGameBlueprints } from "../repositories/gameBlueprintsRepository";

export async function getBlueprints(req: Request, res: Response) {
  const blueprints = await getAllGameBlueprints();

  res.status(200).json(blueprints);
  return;
}
