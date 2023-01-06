import { Router } from "express";
import { getPostByHashtag, getHashtags } from "../controllers/hashtagControllers.js";
import { getUserById } from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";
import validateLikesBody from "../middlewares/likesMiddleware.js";
import postsRouter from "./postsRoutes.js";
import routeSign from "./signRoutes.js";

const router = Router();
router.use("/posts", postsRouter);
router.get("/hashtag/:hashtag",validateAuthorization, getPostByHashtag);
router.get("/users/:id", validateAuthorization, getUserById);
router.get("/hashtags", validateAuthorization, getHashtags)
router.get("/likes", validateAuthorization,validateLikesBody, toggleLikes)

router.use(routeSign);

export default router;
