import { Prisma, Location } from "../../generated/prisma/client";
import { prisma } from "../../config/database.js";
import { ApiError } from "../helpers/api-errors";

export async function getRandomLocation() {
    const result = await prisma.$queryRaw(Prisma.sql`SELECT * FROM "Location" ORDER BY RANDOM() LIMIT 1`);

    if (!Array.isArray(result)) {
        throw new ApiError("Ocorreu um erro ao consultar Location aleatória", 500);
    }

    if (result.length === 0) {
        throw new ApiError("Não foi encontrada nenhuma Location no banco de dados", 500);
    }

    if (!isLocationArray(result[0])) {
        throw new ApiError("Ocorreu um erro ao consultar Location aleatória. Resultado não tem o formato esperado.", 500);
    }

    return result[0];
}

function isLocationArray(x: any): x is Location {
    if ("id" in x && "lat" in x && "lng" in x && "heading" in x && "pitch" in x && "country" in x) {
        return true;
    }
    return false;
}