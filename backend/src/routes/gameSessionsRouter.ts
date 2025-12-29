import { Router } from "express";
import {
  createNewGameSession,
  getGameSessionDetails,
} from "../controllers/gameSessionsController";

const gameSessionsRouter = Router();

gameSessionsRouter.post("/game-sessions", createNewGameSession);
gameSessionsRouter.get("/game-sessions/:id", getGameSessionDetails);

export default gameSessionsRouter;
