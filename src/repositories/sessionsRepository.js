import connectionDB from "../database/db.js";

const SessionsRepository = {
    selectSessionByToken: async (token) => {
        const session = await connectionDB.query(
            `SELECT *
            FROM sessions
            WHERE token = $1;`,
            [token]
        );
        return session.rows[0];
    },
};

export default SessionsRepository;
