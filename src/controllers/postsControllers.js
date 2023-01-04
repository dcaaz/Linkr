import HashtagsRepository from "../repositories/hashtagsRepository.js";
import PostsRepository from "../repositories/postsRepository.js";

const { selectHashtagByName, insertNewHashtag, insertNewHashtagOnPost } =
    HashtagsRepository;
const { insertNewPost, selectPostByDescription } = PostsRepository;

export async function postNewPost(req, res) {
    const { link, description } = req.body;
    const { user_id: userId } = res.locals.session;

    try {
        await insertNewPost(description, userId, link);

        const hashtags = [];
        let inicio, fim;
        for (let i = 0; i <= description.length; i++) {
            const letter = description[i];

            if (letter === "#") inicio = i;

            if (
                inicio !== undefined &&
                (letter === " " || i === description.length)
            ) {
                fim = i;
                hashtags.push(description.slice(inicio, fim));
                inicio = undefined;
            }
        }

        if (hashtags.length > 0) {
            const posts = await selectPostByDescription(description);

            const postId = posts.slice(-1)[0].id;

            hashtags.forEach(async (hashtagName) => {
                let hashtag = await selectHashtagByName(hashtagName);

                if (hashtag === undefined) {
                    await insertNewHashtag(hashtagName);
                    hashtag = await selectHashtagByName(hashtagName);
                }

                await insertNewHashtagOnPost(postId, hashtag.id);
            });
        }

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function getPosts(req, res) {
    res.sendStatus(220);
}
