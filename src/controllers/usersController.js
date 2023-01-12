import UsersRepository from "../repositories/usersRepository.js";

const { selectUserById, selectUsersOrderByFollowing } = UsersRepository;

export async function getUserById(req, res) {
    const { id } = req.params;

    try {
        const user = await selectUserById(id);
        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function getAllUsersByFollowing(req, res) {
    try {
        const users = await selectUsersOrderByFollowing();

        res.send(
            users.map(({ id, username, picture_url, follower_id }) =>
                follower_id
                    ? { id, username, picture_url, isFollowing: true }
                    : { id, username, picture_url, isFollowing: false }
            )
        );
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}
