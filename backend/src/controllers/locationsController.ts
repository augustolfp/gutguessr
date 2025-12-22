import { Request, Response } from "express";
import * as locationsRepo from "../repositories/locationsRepository.js";
import computeHaversineDistance from "../utils/computeHaversineDistance.js";
import computeGuessScore from "../utils/computeGuessScore.js";

export async function getRandomLocation(req: Request, res: Response) {
  const location = await locationsRepo.getRandomLocation();

  res.status(200).json(location);
  return;
}

export async function computeDistanceBetweenLocations(
  req: Request,
  res: Response
) {
  const { locationId, lat, lng } = req.body;

  const exactLocation = await locationsRepo.getLocationById(locationId);

  const distanceInKm = computeHaversineDistance(
    {
      lat,
      lng,
    },
    {
      lat: exactLocation.lat,
      lng: exactLocation.lng,
    }
  );

  const score = computeGuessScore(distanceInKm);

  res.status(201).json({
    exactLocation: {
      lat: exactLocation.lat,
      lng: exactLocation.lng,
    },
    guessedLocation: {
      lat,
      lng,
    },
    distanceInKm,
    score,
  });
  return;
}
