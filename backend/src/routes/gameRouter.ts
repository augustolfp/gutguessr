import { Router } from "express";
import {
  createNewGameSession,
  getGameSessionDetails,
  declareRoundTimeout,
  savePlayerRoundGuess,
} from "../controllers/gameController";

const gameRouter = Router();

gameRouter.post("/game-sessions", createNewGameSession);
gameRouter.get("/game-sessions/:id", getGameSessionDetails);
gameRouter.post("/rounds/timeout", declareRoundTimeout);
gameRouter.post("/rounds/guess", savePlayerRoundGuess);

export default gameRouter;
