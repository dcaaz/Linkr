import connectionDB from "../database/db.js";

export function insertUsers(dataSignup, encryptPassword){
    return connectionDB.query('INSERT INTO users (email, password, username, "picture_url") VALUES ($1, $2, $3, $4);',
            [dataSignup.email, encryptPassword, dataSignup.username, dataSignup.picture]);
}

export function selectIdFromUsers(dataSignin){
    return connectionDB.query('SELECT id FROM users WHERE email=$1;', [dataSignin.email]);
}

export function insertSessions(userId, token){
    return connectionDB.query('INSERT INTO sessions (user_id, token) VALUES ($1, $2);', [userId.rows[0].id, token]);
}

