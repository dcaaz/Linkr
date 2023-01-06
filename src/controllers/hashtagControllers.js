import connectionDB from "../database/db.js";

export async function getPostByHashtag(req, res) {
    const {hashtag} = req.params

    try {
        const twitts = await connectionDB.query(`
        SELECT users.username, users.picture_url, posts.description, posts.link, posts.likes_amount
        FROM posts_hashtags
            JOIN hashtags ON hashtags.id = post_hashtags.hashtag_id
            JOIN posts ON posts_hashtags.post_id = posts.id
            JOIN users ON users.id = posts.user_id 
        WHERE hashtags.name = $1
        `, [hashtag])

        res.send(twitts).status(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getHashtags(req, res) {


    try {
        const hashtags = await connectionDB.query(`
        SELECT hashtags.name  SUM(hashtags.*) AS likes_sum
        FROM posts_hashtags
            JOIN hashtags ON hashtags.id = post_hashtags.hashtag_id
            JOIN posts ON posts_hashtags.post_id = posts.id
        GROUP BY posts_hashtags.hashtag_id
        ORDER BY likes_sum DESC
        LIMIT 10;
        `)

        res.send(hashtags).status(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}