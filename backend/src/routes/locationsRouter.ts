import { Router } from "express";

import {
  getRandomLocation,
  computeDistanceBetweenLocations,
} from "../controllers/locationsController";

const locationsRouter = Router();

locationsRouter.get("/locations/random", getRandomLocation);
locationsRouter.post("/location/guess", computeDistanceBetweenLocations);

export default locationsRouter;
