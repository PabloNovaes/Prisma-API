import { UserController } from "../controllers/user.controller"; "../controllers/user.controller";
import { Router } from "express";

const userController = new UserController

const userRoutes = Router()

userRoutes.post('/users', userController.create)
userRoutes.get('/users/:id', userController.showOneById)
userRoutes.get('/users', userController.show)
userRoutes.delete('/users/:id', userController.delete)
userRoutes.put('/users/:id', userController.update)

export default userRoutes

