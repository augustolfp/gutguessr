import { Router } from "express";
import { createNewGameSession, getGameSession } from "../controllers/gameSessionsController";

const gameSessionsRouter = Router();

gameSessionsRouter.post("/game-session/new", createNewGameSession);
gameSessionsRouter.get("/game-session/:id", getGameSession);

export default gameSessionsRouter;
