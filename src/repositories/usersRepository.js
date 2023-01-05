import connectionDB from "../database/db.js";

const UsersRepository = {
    selectUserById: async (id) => {
        const user = await connectionDB.query(
            `SELECT *
            FROM users
            WHERE id = $1;`,
            [id]
        );
        return user.rows[0];
    },
};

export default UsersRepository;
