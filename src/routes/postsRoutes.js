import { Router } from "express";
import {
    getLinkMetadata,
    getPosts,
    postNewPost,
} from "../controllers/postsControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.post("", postNewPost);
router.get("", getPosts);
router.get("/metadata/:id", getLinkMetadata);

export default router;
