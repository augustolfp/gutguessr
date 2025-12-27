import { Router } from "express";

import {
  declareRoundTimeout,
  savePlayerRoundGuess,
} from "../controllers/guessesController";

const guessesRouter = Router();

guessesRouter.post("/rounds/timeout", declareRoundTimeout);
guessesRouter.post("/rounds/guess", savePlayerRoundGuess);

export default guessesRouter;
