import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes";

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, ()=> console.log("server is running on port 3000"))