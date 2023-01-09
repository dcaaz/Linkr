import UsersRepository from "../repositories/usersRepository.js";

const { selectUserById, selectAllUsers } = UsersRepository;

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

export async function getAllUsers(req, res) {
    try {
        const users = await selectAllUsers();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}
