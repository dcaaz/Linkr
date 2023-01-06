import HashtagsRepository from "../repositories/hashtagsRepository.js";
import PostsRepository from "../repositories/postsRepository.js";
import got from "got";
import _metascraper from "metascraper";
import description from "metascraper-description";
import image from "metascraper-image";
import title from "metascraper-title";
import url from "metascraper-url";

const {
    selectHashtagByName,
    insertNewHashtag,
    insertNewHashtagOnPost,
    deleteHashtagsOnPost,
} = HashtagsRepository;
const {
    insertNewPost,
    selectPostByDescription,
    selectPosts,
    selectPostById,
    updatePostDescription,
} = PostsRepository;

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
    try {
        const posts = await selectPosts({ limit: 20 });
        res.send(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function getLinkMetadata(req, res) {
    const { id: postId } = req.params;
    const metascraper = _metascraper([description(), image(), title(), url()]);

    try {
        const { link } = await selectPostById(postId);

        const { body: html, url } = await got(link);

        const metadata = await metascraper({ html, url });

        res.send(metadata);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function updatePost(req, res) {
    const { id: postId } = req.params;
    const { description } = req.body;

    try {
        await updatePostDescription(postId, description);

        await deleteHashtagsOnPost(postId);

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

        hashtags.forEach(async (hashtagName) => {
            let hashtag = await selectHashtagByName(hashtagName);

            if (hashtag === undefined) {
                await insertNewHashtag(hashtagName);
                hashtag = await selectHashtagByName(hashtagName);
            }

            await insertNewHashtagOnPost(postId, hashtag.id);
        });

        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}
