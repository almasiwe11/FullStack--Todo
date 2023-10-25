import DragAndDrop from "./Components/DragAndDrop"
import Header from "./Components/Header"
import InputTodo from "./Components/InputTodo"
import TodoList from "./Components/TodoList"

function App() {
  return (
    <main className="w-full py-10 md:py-16 lg:py-20 bg-w-auto min-h-[100vh] bg-mob-light lg:bg-des-light  bg-no-repeat">
      <Header />
      <InputTodo />
      <TodoList />
      <DragAndDrop />
    </main>
  )
}

export default App
