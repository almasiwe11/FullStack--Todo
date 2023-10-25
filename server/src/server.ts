import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "../routes/todoRoutes.ts"
import { notFound } from "../middleware/not-found.ts"
import { errorHandlerMiddleware } from "../middleware/error-handler.ts"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", router)
app.use(errorHandlerMiddleware)
app.use(notFound)

async function start() {
  await mongoose.connect(process.env.MONGO_URI)
  app.listen(5555, () => console.log("listening to port 5555"))
}

start()
