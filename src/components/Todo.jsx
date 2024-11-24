import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

const Todo = () => {
   const {todoList} =  useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const deleteTodoItem = (id) => {
        dispatch(deleteTodo(id));
    };
    const toggleTodo = (id) => {
        dispatch(toggleComplete(
            {id:id,
            completed: !completed
            }

        ));
    };

  return (
    <>
    <div className="">
        {todoList.map((todo) => (
            <div key={todo.id} className="flex items-center justify-between p-2 border-b border-gray-200">
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" onChange={()=>{toggleTodo}} />
                    <span>{todo.title}</span>
                </div>
                <button className="text-red-500" onClick={() => deleteTodoItem(todo.id)}>Delete</button>
            </div>
        ))}

    </div>
    </>
  )
}

export default Todo