import axios from "axios"
import { useEffect, useState } from "react"
import Todo from "./Todo"
import { TaskType } from "../../Types/TaskTypes"
export default function TodoList() {
  const [todoList, setTodoList] = useState<TaskType[]>()
  useEffect(() => {
    async function getTodos() {
      const data = await axios.get("http://localhost:5555/api")
      setTodoList(data.data)
      console.log(data.data)
    }

    getTodos()
  }, [])
  return (
    <div>
      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo) => {
          return <Todo key={todo._id} task={todo} />
        })}
    </div>
  )
}
