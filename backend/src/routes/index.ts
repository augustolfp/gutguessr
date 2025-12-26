import { Router } from "express";

import locationsRouter from "./locationsRouter";
import quizzesRouter from "./quizzesRouter";

const router = Router();

router.use(locationsRouter);
router.use(quizzesRouter);

export default router;
