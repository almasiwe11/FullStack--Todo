import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Todo from "../models/Todo.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api", (_, res) => {
  async function getTodos() {
    const tasks = await Todo.find({})
    res.status(200).json(tasks)
  }

  getTodos()
})

app.post("/api", (req, res) => {
  async function createTodo() {
    const task = await Todo.create(req.body)
    res.status(200).json(task)
  }

  createTodo()
})

async function start() {
  await mongoose.connect(process.env.MONGO_URI)
  app.listen(5555, () => console.log("listening to port 5555"))
}

start()
