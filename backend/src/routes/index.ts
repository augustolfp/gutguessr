import { Router } from "express";

import quizzesRouter from "./quizzesRouter";
import guessesRouter from "./guessesRouter";

const router = Router();

router.use(quizzesRouter);
router.use(guessesRouter);

export default router;
