import { Router } from "express";
import postsRouter from "./postsRoutes.js";

const router = Router();
router.use(postsRouter);

export default router;
