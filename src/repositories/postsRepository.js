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
    selectPosts: async ({ limit }) => {
        const posts = await connectionDB.query(
            `SELECT *
            FROM posts
            ORDER BY id
            DESC
            LIMIT $1;`,
            [limit]
        );
        return posts.rows;
    },
    selectPostById: async (id) => {
        const post = await connectionDB.query(
            `SELECT *
            FROM posts
            WHERE id = $1;`,
            [id]
        );
        return post.rows[0];
    },
};

export default PostsRepository;
