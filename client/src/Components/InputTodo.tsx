import { FormEvent } from "react"

export default function InputTodo() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <div className="bg-white w-full p-3 rounded-xl grid grid-cols-field">
        <div className="border border-1 border-gray-border-light  rounded-full w-8 h-8"></div>
        <input
          type="text"
          className="bg-transparent  w-full px-3 outline-none"
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  )
}
