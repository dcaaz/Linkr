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
    selectAllUsers: async () => {
        const { rows } = await connectionDB.query(
            `SELECT *
            FROM users;`
        );
        return rows;
    },
};

export default UsersRepository;
