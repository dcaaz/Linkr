import { Router } from "express";
import { getPostByHashtag } from "../controllers/hashtagControllers";

const postsRoutes = Router()

postsRoutes.get("/hashtag/:hashtag", getPostByHashtag)

export default postsRoutes