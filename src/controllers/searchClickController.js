import connectionDB from "../database/db.js";

export async function getSearchClick(req, res) {

    const { id } = req.params
    console.log("id", id)
    
    try {


        const { rows } = await connectionDB.query('SELECT * FROM posts WHERE "user_id" = $1 ',
          [id]);

        console.log("posts", rows)
       
        return res.status(201).send(rows);

    } catch (err) {
        console.log("err getSearchClick", err.message);
        return res.status(500).send('Server not running');
    }
}