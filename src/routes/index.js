import { Router } from "express";
import { getPostByHashtag } from "../controllers/hashtagControllers.js";
import { getUserById } from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";
import postsRouter from "./postsRoutes.js";
import routeSign from "./signRoutes.js";

const router = Router();
router.use("/posts", postsRouter);
router.get("/hashtag/:hashtag", getPostByHashtag);
router.get("/users/:id", validateAuthorization, getUserById);
router.use(routeSign);

export default router;
