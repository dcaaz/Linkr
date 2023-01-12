import connectionDB from "../database/db.js";

const UsersRepository = {
    selectUserById: async (id) => {
        const { rows } = await connectionDB.query(
            `SELECT *
            FROM users
            WHERE id = $1;`,
            [id]
        );
        return rows[0];
    },
    selectUsersOrderByFollowing: async (followerId) => {
        const { rows } = await connectionDB.query(
            `SELECT u.id, u.username, u.picture_url, f.follower_id
            FROM users AS u
            LEFT JOIN
                (SELECT * FROM follows WHERE follower_id = $1) AS f
            ON u.id = f.followed_id
            ORDER BY f.id;`,
            [followerId]
        );
        return rows;
    },
    selectUsersFilteredByFollowing: async (followerId) => {
        const { rows } = await connectionDB.query(
            `SELECT *
            FROM users AS u
            JOIN
                (SELECT * FROM follows WHERE follower_id = $1) AS f
            ON u.id = f.followed_id
            ORDER BY f.id;`,
            [followerId]
        );
        return rows;
    },
};

export default UsersRepository;
