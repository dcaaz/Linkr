import connectionDB from "../database/db.js";

export async function addOrRemoveLikes(req, res) {
    const { id, type } = res.locals.like;

    try {
        const currentLikes = await connectionDB.query(
            `
            SELECT likes_amount FROM posts WHERE id = $1
        `,
            [id]
        );

        if (type === "add") {
            await connectionDB.query(
                `
            UPDATE posts
            SET likes_amount = $1
            WHERE id = $2
            `,
                [currentLikes.rows[0].likes_amount + 1, id]
            );
            res.sendStatus(201);
        }
        if (type === "remove") {
            await connectionDB.query(
                `
            UPDATE posts
            SET likes_amount = $1
            WHERE id = $2
            `,
                [currentLikes.rows[0].likes_amount - 1, id]
            );
            res.sendStatus(201);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
