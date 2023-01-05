import joi from "joi";

export const signupSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().min(3).required(),
    picture: joi.string().required()
});