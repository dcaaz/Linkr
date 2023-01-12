import FollowsRepository from "../repositories/followsRepository.js";

const { insertNewFollow, deleteFollow, selectFollowByUsersId } =
    FollowsRepository;

export async function followUser(req, res) {
    const {
        session: { user_id: followerId },
    } = res.locals;
    const { followedId } = req.body;

    try {
        await insertNewFollow(followerId, followedId);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function unfollowUser(req, res) {
    const {
        session: { user_id: followerId },
    } = res.locals;
    const { followedId } = req.params;

    try {
        await deleteFollow(followerId, followedId);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function getFollowedUserById(req, res) {
    const {
        session: { user_id: followerId },
    } = res.locals;
    const { followedId } = req.params;

    try {
        const follow = await selectFollowByUsersId(followerId, followedId);
        res.send(follow);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}
