import { createUser } from "../respositorys/user.repository";

export const create = async (req, res) => {
    try {
        const data = req.body
        const user = createUser(data)
        res.status(200).send(await user)
    } catch (error) {
        console.log(`Erro ao criar usuario ${error}`);
    }
}
