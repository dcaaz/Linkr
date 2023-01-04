import connectionDB from "../database/db.js";

const PostsRepository = {
    insertNewPost: async (description, userId, link) => {
        await connectionDB.query(
            `INSERT INTO posts (description, user_id, link)
            VALUES ($1, $2, $3);`,
            [description, userId, link]
        );
    },
    selectPostByDescription: async (description) => {
        const post = await connectionDB.query(
            `SELECT *
            FROM posts
            WHERE description = $1;`,
            [description]
        );
        return post.rows;
    },
};

export default PostsRepository;
