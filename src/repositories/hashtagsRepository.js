import connectionDB from "../database/db.js";

const HashtagsRepository = {
    selectHashtagByName: async (name) => {
        const hashtag = await connectionDB.query(
            `SELECT *
            FROM hashtags
            WHERE name = $1;`,
            [name]
        );
        return hashtag.rows[0];
    },
    insertNewHashtag: async (name) => {
        await connectionDB.query(
            `INSERT INTO hashtags (name)
            VALUES ($1);`,
            [name]
        );
    },
    insertNewHashtagOnPost: async (postId, hashtagId) => {
        await connectionDB.query(
            `INSERT INTO posts_hashtags (post_id, hashtag_id)
            VALUES ($1, $2);`,
            [postId, hashtagId]
        );
    },
};

export default HashtagsRepository;
