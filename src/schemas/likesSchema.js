import joi from "joi"

export default const likesSchema = joi.object({
    id: joi.number().integer().required(),
    type: joi.string().valid('add','remove').required(),
})