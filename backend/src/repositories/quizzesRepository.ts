import fs from "fs/promises";
import { ApiError } from "../helpers/api-errors";
const brumadoEasy = await fs.readFile("./quizzes/brumadoEasy.json");
const parsedList = JSON.parse(brumadoEasy.toString());

type RoundBlueprint = {
  roundNumber: number;
  comment: string;
  maxRoundTime: number;
  maxRoundScore: number;
  coordinates: {
    lat: number;
    lng: number;
    heading: number;
    pitch: number;
  };
};

type QuizBlueprint = {
  title: string;
  level: string;
  description: string;
  rounds: RoundBlueprint[];
};

function isQuizBlueprint(x: any): x is QuizBlueprint {
  if ("title" in x && "level" in x && "description" in x && "rounds" in x) {
    return true;
  }
  return false;
}

export function getBrumadoQuizBlueprint() {
  const isBlueprint = isQuizBlueprint(parsedList);

  if (!isQuizBlueprint(parsedList)) {
    throw new ApiError("Brumado Quiz não utilizado.", 500);
  }
  return parsedList;
}
