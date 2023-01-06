import { Router } from "express";
import { getLoggedUser, getUserById } from "../controllers/usersController.js";
import validateAuthorization from "../middlewares/validateAuthorizationMiddleware.js";

const router = Router();

router.use("", validateAuthorization);

router.get("/me", getLoggedUser);
router.get("/:id", getUserById);

export default router;
