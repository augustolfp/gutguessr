import { Router } from "express";

import { getLocation } from "../controllers/locationsController";

const locationsRouter = Router();

locationsRouter.get("/location", getLocation);

export default locationsRouter;
