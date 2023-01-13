import { Router } from "express";
import {
    getAllUsersByFollowing,
    getFollowingUsersOnly,
    getUserById,
} from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.get("/follows", getAllUsersByFollowing);
router.get("/following", getFollowingUsersOnly);
router.get("/:id", getUserById);

export default router;
