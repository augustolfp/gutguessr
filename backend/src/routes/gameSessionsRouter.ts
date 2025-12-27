import { Router } from "express";
import { createNewGameSession, getGameSession } from "../controllers/gameSessionsController";

const gameSessionsRouter = Router();

gameSessionsRouter.post("/game-sessions", createNewGameSession);
gameSessionsRouter.get("/game-sessions/:id", getGameSession);

export default gameSessionsRouter;
