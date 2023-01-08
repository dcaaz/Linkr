import connectionDB from "../database/db.js";

export function getSearchClick(req, res) {

    //lembrar de colocar async
    
    try {


       // await connectionDB.query('INSERT INTO users (email, password, username, "picture_url") VALUES ($1, $2, $3, $4);',
       //     [dataSignup.email, encryptPassword, dataSignup.username, dataSignup.picture]);
        console.log("deu certo!")
        return res.status(201).send("deu certo");

    } catch (err) {
        console.log("err postSignup", err.message);
        return res.status(500).send('Server not running');
    }
}