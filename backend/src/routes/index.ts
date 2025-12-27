import { Router } from "express";

import quizzesRouter from "./quizzesRouter";

const router = Router();

router.use(quizzesRouter);

export default router;
