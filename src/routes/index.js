import { Router } from "express";
import postsRouter from "./postsRoutes.js";
import routeSign from "./signRoutes.js";

const router = Router();
router.use(postsRouter);
router.use(routeSign);

export default router;
