import { Router } from "express";

import gameSessionsRouter from "./gameSessionsRouter";
import guessesRouter from "./guessesRouter";

const router = Router();

router.use(gameSessionsRouter);
router.use(guessesRouter);

export default router;
