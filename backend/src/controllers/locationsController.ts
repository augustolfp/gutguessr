import { Request, Response } from "express";
import { prisma } from "../../config/database.js";

export async function getRandomLocation(req: Request, res: Response) {
    const location = await prisma.location.findFirst();

    res.status(200).json(location);
    return;
}