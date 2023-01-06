import UsersRepository from "../repositories/usersRepository.js";

export async function getUserById(req, res) {
    const { id } = req.params;

    try {
        const user = await UsersRepository.selectUserById(id);

        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export async function getLoggedUser(req, res) {
    const { session } = res.locals;

    try {
        const user = await UsersRepository.selectUserById(session.user_id);

        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}
