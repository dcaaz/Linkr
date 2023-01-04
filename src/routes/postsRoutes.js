import { Router } from "express";
import { getPosts, postNewPost } from "../controllers/postsControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";
import { getPostByHashtag } from "../controllers/hashtagControllers";

const router = Router();

router.get("/hashtag/:hashtag", getPostByHashtag)
router.post("/posts", postNewPost);
router.get("/posts", getPosts);

export default router;