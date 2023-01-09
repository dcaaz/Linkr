import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.get("", getAllUsers);
router.get("/:id", getUserById);

export default router;
