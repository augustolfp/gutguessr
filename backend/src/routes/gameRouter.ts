import { Router } from "express";
import {
  createNewGameSession,
  getGameSessionDetails,
  computeRoundGuess,
  computeRoundTimeout,
} from "../controllers/gameController";

const gameRouter = Router();

gameRouter.post("/game-sessions", createNewGameSession);
gameRouter.get("/game-sessions/:id", getGameSessionDetails);
gameRouter.post(
  "/game-sessions/:gameSessionId/rounds/:roundNumber/guess",
  computeRoundGuess
);
gameRouter.post(
  "/game-sessions/:gameSessionId/rounds/:roundNumber/timeout",
  computeRoundTimeout
);

export default gameRouter;
