import express from "express"
import {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controllers/todoControler.ts"
const router = express.Router()

router.route("/").get(getTodos).post(createTodo)
router.route("/:id").delete(deleteTodo).patch(updateTodo)

export default router
