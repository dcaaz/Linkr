import { Router } from "express";
import {
    followUser,
    getFollowedUserById,
    unfollowUser,
} from "../controllers/followControllers.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.post("", followUser);
router.delete("/:followedId", unfollowUser);
router.get("/:followedId", getFollowedUserById);

export default router;
