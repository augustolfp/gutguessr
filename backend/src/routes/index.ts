import { Router } from "express";

import gameRouter from "./gameRouter";

const router = Router();

router.use(gameRouter);

export default router;
