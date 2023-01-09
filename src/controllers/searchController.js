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

export async function getSearchId(req, res) {

    const { id } = req.params
    console.log("id", id)
    
    try {


        // const post = await connectionDB.query('SELECT * FROM posts WHERE "user_id" = $1 ',
        //   [id]);

        // const user = await connectionDB.query('SELECT * FROM users WHERE "id" = $1 ',
        //   [id]);

        const user = await connectionDB.query(`
        SELECT 
        users.username, users."picture_url", 
        posts.description, posts.link, posts."likes_amount"
        FROM users
        JOIN posts
        ON users.id = posts."user_id" 
        WHERE users.id = $1`, [id])

        return res.status(201).send(user.rows);

    } catch (err) {
        console.log("err getSearchId", err.message);
        return res.status(500).send('Server not running');
    }
}