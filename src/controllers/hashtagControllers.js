// importar banco de dados

export async function getPostByHashtag(req, res) {
    const {hashtag} = req.params

    try {
        const twitts = await connectionDb.query(`
        SELECT users.username, users.picture_url, posts.description, posts.link, posts.likes_amount
        FROM posts_hashtags
            JOIN hastags ON hashtags.id = post_hashtags.hashtag_id
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