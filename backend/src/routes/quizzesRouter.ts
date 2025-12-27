import { Router } from "express";

import { createNewQuiz, getQuiz } from "../controllers/quizzesController";

const quizzesRouter = Router();

quizzesRouter.post("/quizzes/new", createNewQuiz);
quizzesRouter.get("/quizzes/:id", getQuiz);

export default quizzesRouter;
