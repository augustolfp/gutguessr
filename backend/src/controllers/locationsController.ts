import { Request, Response } from "express";
import * as locationsRepo from "../repositories/locationsRepository.js";

export async function getRandomLocation(req: Request, res: Response) {
    const location = await locationsRepo.getRandomLocation();

    res.status(200).json(location);
    return;
}