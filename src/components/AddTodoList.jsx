import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlice"

const AddTodoList = () => {
    const [input, setInput] = useState("")
const dispatch = useDispatch()
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({
        title: input
    }))
    setInput("")
}
  return (
<>
    <div className="add-todo">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-2 border border-gray-200"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add Todo</button>
            </form>
        </div>
</>  )
}

export default AddTodoList