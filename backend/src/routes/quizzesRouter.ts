import { Router } from "express";

import { createNewQuiz } from "../controllers/quizzesController";

const quizzesRouter = Router();

quizzesRouter.post("/quizzes/new", createNewQuiz);

export default quizzesRouter;
