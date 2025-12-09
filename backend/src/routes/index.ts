import { Router } from "express";

import locationsRouter from "./locationsRouter";

const router = Router();

router.use(locationsRouter);

export default router;
