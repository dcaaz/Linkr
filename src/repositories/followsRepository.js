import connectionDB from "../database/db.js";

const FollowsRepository = {
    insertNewFollow: async (followerId, followedId) => {
        await connectionDB.query(
            `INSERT INTO follows (follower_id, followed_id)
            VALUES ($1, $2);`,
            [followerId, followedId]
        );
    },
    deleteFollow: async (followerId, followedId) => {
        await connectionDB.query(
            `DELETE FROM follows
            WHERE follower_id = $1 AND followed_id = $2;`,
            [followerId, followedId]
        );
    },
    selectFollowByUsersId: async (followerId, followedId) => {
        const { rows } = await connectionDB.query(
            `SELECT *
            FROM follows
            WHERE follower_id = $1 AND followed_id = $2;`,
            [followerId, followedId]
        );
        return rows[0];
    },
};

export default FollowsRepository;
