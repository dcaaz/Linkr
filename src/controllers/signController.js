import bcrypt from 'bcrypt';
import { v4 as uuid } from "uuid";
import { insertUsers, selectIdFromUsers, insertSessions } from "../repositories/signRepository.js";

export async function postSignup(req, res) {

    const dataSignup = req.dataUser;

    try {

        let encryptPassword = bcrypt.hashSync(dataSignup.password, 12);

        await insertUsers(dataSignup, encryptPassword);

        return res.sendStatus(201);

    } catch (err) {
        console.log("err postSignup", err.message);
        return res.status(500).send('Server not running');
    }
}

export async function postSignin(req, res) {
    const dataSignin = req.dataUser;
    const all = req.dataAll;
    const token = uuid();

    try {

        const userId = await selectIdFromUsers(dataSignin);

        await insertSessions(userId, token);
        
        return res.status(200).send([ token, all]);
    }
    catch (err) {
        console.log("err postSignin", err.message);
        return res.status(500).send('Server not running');
    }
}

