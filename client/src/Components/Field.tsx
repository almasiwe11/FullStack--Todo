import { useState, FormEvent } from "react"
import Circle from "./Reuse/Circle"
import { TaskType } from "../../Types/TaskTypes"
import Cross from "../SVG/Cross"

type Props = {
  type: "todo" | "input"
  task?: TaskType
  index?: number
}

export default function Field({ type, task, index }: Props) {
  const [value, setValue] = useState(type === "todo" ? task?.name : "")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  function deleteTask() {}

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white p-3.5 px-5 ${
        index === 0 && "rounded-t-lg"
      }  text-gray-dark-text grid ${
        type === "todo"
          ? "grid-cols-todo border-b border-gray-border-light"
          : "grid-cols-field rounded-lg"
      } items-center`}
    >
      <Circle />
      <input
        type="text"
        className="bg-transparent  w-full px-3 outline-none"
        placeholder="Create a new todo..."
        readOnly={type === "todo"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "todo" && <Cross onClick={deleteTask} />}
    </form>
  )
}
