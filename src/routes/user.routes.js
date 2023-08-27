import { create } from "../controllers/user.controller";
import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/users', create)

export default userRoutes

