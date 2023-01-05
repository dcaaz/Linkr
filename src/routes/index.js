import { Router } from "express";
import { getUserById } from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";
import postsRouter from "./postsRoutes.js";

const router = Router();
router.use("/posts", postsRouter);
router.get("/users/:id", validateAuthorization, getUserById);

export default router;
