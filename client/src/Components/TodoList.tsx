import axios from "axios"
import { useEffect, useState } from "react"
import { TaskType } from "../../Types/TaskTypes"
import Field from "./Field"
import TodosController from "./TodosController"
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
    <div className="wrapper bg-white relative rounded-lg shadow-md">
      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo, i) => {
          return <Field type="todo" key={todo._id} index={i} task={todo} />
        })}
      <TodosController len={todoList?.length} />
    </div>
  )
}
