import AddTodoList from "./components/AddTodoList";
import Todo from "./components/Todo";

function App() {

  return (
    <>
      <h1>Todo Daily</h1>
      <div className="container mx-auto">
        <AddTodoList />
        <Todo />
        </div>
    </>
  )
}

export default App
