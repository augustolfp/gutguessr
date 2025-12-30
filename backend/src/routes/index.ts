import { Router } from "express";

import gameRouter from "./gameRouter";
import testsRouter from "./testsRouter";

const router = Router();

router.use(gameRouter);
router.use(testsRouter);

export default router;
