import connectionDB from "../database/db.js";

export function selectPosts(id){
    return connectionDB.query('SELECT * FROM posts WHERE "user_id" = $1 ',
    [id]);
}

export function selectUsersAndPosts(id){
    return connectionDB.query(`
    SELECT 
    users.username, users."picture_url", 
    posts.description, posts.link, posts."likes_amount"
    FROM users
    JOIN posts
    ON users.id = posts."user_id" 
    WHERE users.id = $1`, [id]);
}