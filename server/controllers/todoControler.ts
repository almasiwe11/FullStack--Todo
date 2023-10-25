import Todo from "../models/Todo.ts"
import { asyncWrapper } from "../middleware/async-wrapper.ts"
import { createCustomError } from "../errors/custom-error.ts"

const getTodos = asyncWrapper(async (req, res) => {
  const tasks = await Todo.find({})
  res.status(200).json(tasks)
})

const createTodo = asyncWrapper(async (req, res) => {
  const task = await Todo.create(req.body)
  res.status(200).json(task)
})

const deleteTodo = asyncWrapper(async (req, res) => {
  const id = req.params.id
  const task = await Todo.findByIdAndDelete(id)
  if (!task) {
    createCustomError("Task does not exist", 404)
  }
  res.status(200).json(task)
})

const updateTodo = asyncWrapper(async (req, res) => {
  const id = req.params.id
  const task = await Todo.findByIdAndUpdate(
    {
      _id: id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (!task) {
    createCustomError("Task does not exist", 404)
  }
  res.status(200).json(task)
})

export { getTodos, createTodo, deleteTodo, updateTodo }
