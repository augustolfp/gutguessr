import fs from "fs/promises";

type RoundSeed = {
  lat: number;
  lng: number;
  heading: number;
  pitch: number;
};

type GameSeed = {
  title: string;
  description: string;
  rounds: RoundSeed[];
};

export default async function getAllSeeds() {
  const fileNames = await fs.readdir("./config/seedFiles");

  const parsedObjectsList = await Promise.all(
    fileNames.map(async (fileName) => {
      const rawFileContent = await fs.readFile(
        `./config/seedFiles/${fileName}`
      );
      return JSON.parse(rawFileContent.toString());
    })
  );

  const typeGuardedSeedsList = parsedObjectsList.filter((obj) =>
    isGameSeed(obj)
  );

  return typeGuardedSeedsList;
}

// Não é a typeguard mais bem estruturada da história, mas serve o propósito:
function isGameSeed(x: any): x is GameSeed {
  if ("title" in x && "description" in x && "rounds" in x) {
    return true;
  }
  return false;
}
