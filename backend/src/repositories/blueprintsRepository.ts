import fs from "fs/promises";
import { ApiError } from "../helpers/api-errors";
const brumadoEasy = await fs.readFile("./blueprints/brumadoEasy.json");
const parsedList = JSON.parse(brumadoEasy.toString());

type RoundBlueprint = {
  roundNumber: number;
  coordinates: {
    lat: number;
    lng: number;
    heading: number;
    pitch: number;
  };
};

type QuizBlueprint = {
  title: string;
  description: string;
  rounds: RoundBlueprint[];
};

function isQuizBlueprint(x: any): x is QuizBlueprint {
  if ("title" in x && "description" in x && "rounds" in x) {
    return true;
  }
  return false;
}

export function getBrumadoQuizBlueprint() {
  if (!isQuizBlueprint(parsedList)) {
    throw new ApiError("Brumado Quiz não apresenta formato correto.", 500);
  }
  return parsedList;
}
