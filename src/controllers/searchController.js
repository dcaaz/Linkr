import { selectPosts, selectUsersAndPosts } from "../repositories/searchRepository.js";

export async function getSearchClick(req, res) {

    const { id } = req.params
    
    try {

        const { rows } = await selectPosts(id);
       
        return res.status(201).send(rows);

    } catch (err) {
        console.log("err getSearchClick", err.message);
        return res.status(500).send('Server not running');
    }
}

export async function getSearchId(req, res) {

    const { id } = req.params
    
    try {

        const user = await selectUsersAndPosts(id);

        return res.status(201).send(user.rows);

    } catch (err) {
        console.log("err getSearchId", err.message);
        return res.status(500).send('Server not running');
    }
}