import { Router } from "express";

import { getRandomLocation } from "../controllers/locationsController";

const locationsRouter = Router();

locationsRouter.get("/locations/random", getRandomLocation);

export default locationsRouter;
