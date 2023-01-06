import { Router } from "express";
import {
    getPostByHashtag,
    getHashtags,
} from "../controllers/hashtagControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";
import validateLikesBody from "../middlewares/likesMiddleware.js";
import postsRouter from "./postsRoutes.js";
import routeSign from "./signRoutes.js";
import { getUserById } from "../controllers/usersController.js";

const router = Router();

router.use(routeSign);
router.use("/posts", postsRouter);
router.get("/users/:id", validateAuthorization, getUserById);

router.get("/hashtag/:hashtag", validateAuthorization, getPostByHashtag);
router.get("/hashtags", validateAuthorization, getHashtags);
router.get("/likes", validateAuthorization, validateLikesBody);

export default router;
