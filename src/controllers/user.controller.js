import { createUser, getUsers, deleteUser, deleteUser, updateUser, getUserById } from "../respositorys/user.repository";

export class UserController {
    async create(req, res) {
        try {
            const data = req.body
            const user = createUser(data)
            res.status(200).send(await user)
        } catch (error) {
            console.log(`Erro ao criar usuario ${error}`);
        }
    }

    async show(req, res) {
        try {
            const users = getUsers()
            res.status(200).send(await users)
        } catch (error) {
            console.log(error);
        }
    }


    async showOneById(req, res) {
        try {
            const { id } = req.params
            const user = getUserById(id)
                res.status(200).send(await user)
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const user = await deleteUser(id)
            res.status(200).send(user)
        } catch (error) {
            console.log(`Erro ao deletar usuário ${error}`);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const data = req.body
            const user = await updateUser(data, id)
            res.status(200).send(user)
        } catch (error) {
            console.log(`Erro o atualizar dados do usuario ${error}`);
        }
    }

}
