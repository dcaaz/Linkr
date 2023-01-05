import connectionDB from "../database/db.js";
import bcrypt from 'bcrypt';

export async function postSignup(req, res) {

    const dataSignup = req.dataUser;
    
    console.log("data", dataSignup)

    try {

        let encryptPassword = bcrypt.hashSync(dataSignup.password, 12);

        await connectionDB.query('INSERT INTO users (username, email, password, "picture_url") VALUES ($1, $2, $3, $4);',
            [dataSignup.email, encryptPassword, dataSignup.username, dataSignup.picture]);

        return res.sendStatus(201);

    } catch (err) {
        console.log("err postSignup", err.message);
        return res.status(500).send('Server not running');
    }
}
