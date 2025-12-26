import { Router } from "express";

import { getBrumadoQuizBlueprint } from "../controllers/quizzesController";

const quizzesRouter = Router();

quizzesRouter.get("/quizzes/brumado-easy", getBrumadoQuizBlueprint);

export default quizzesRouter;
