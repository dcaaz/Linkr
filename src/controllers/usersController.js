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
