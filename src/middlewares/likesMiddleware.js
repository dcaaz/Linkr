import likesSchema from "../schemas/likesSchema.js";

export default async function validateLikesBody(req, res, next) {
    const like = req.body;
    const { error } = urlSchema.validate(fullUrl, { abortEarly: false });

    if (error) {
        const errors = error.details.map((det) => det.message);
        return res.status(422).send(errors);
    }
    res.locals.like = like;
    next();
}
