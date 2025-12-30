import { Router } from "express";
import { getBlueprints } from "../controllers/testsController";

const testsRouter = Router();

testsRouter.get("/tests/blueprints", getBlueprints);

export default testsRouter;
