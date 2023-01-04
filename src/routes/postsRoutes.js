import { Router } from "express";
import { getPosts, postNewPost } from "../controllers/postsControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

//router.use(validateAuthorization);

router.post("/posts", postNewPost);
router.get("/posts", getPosts);

export default router;
