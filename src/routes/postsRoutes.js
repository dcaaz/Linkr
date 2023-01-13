import { Router } from "express";
import {
    deletePost,
    getLinkMetadata,
    getPosts,
    getPostsByFollowing,
    postNewPost,
    updatePost,
} from "../controllers/postsControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.post("", postNewPost);
router.get("", getPosts);
router.get("/follows", getPostsByFollowing);
router.get("/metadata/:id", getLinkMetadata);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
