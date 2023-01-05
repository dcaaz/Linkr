import { Router } from "express";
import { postSignup } from "../controllers/signController.js";
import { signinValidation } from "../middlewares/signinMiddleware.js";
import { signupValidation } from "../middlewares/signupMiddlewares.js";

const routeSign = Router();

routeSign.post('/signup', signupValidation, postSignup);

routeSign.post('/signin', signinValidation);

export default routeSign;