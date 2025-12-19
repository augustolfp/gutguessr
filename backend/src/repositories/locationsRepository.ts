import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../config/database.js";

export async function getRandomLocation() {
    const result = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Location" ORDER BY RANDOM() LIMIT 1`);
    return result;
}