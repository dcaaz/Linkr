import { Router } from "express";
import { getPostByHashtag } from "../controllers/hashtagControllers.js";
import postsRouter from "./postsRoutes.js";
import routeSign from "./signRoutes.js";
import usersRouter from "./usersRoutes.js";

const router = Router();
router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use(routeSign);
router.get("/hashtag/:hashtag", getPostByHashtag);

export default router;
