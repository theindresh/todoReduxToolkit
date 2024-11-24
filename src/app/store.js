import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../redux/todoSlice'
export default configureStore({
  reducer: {
    todos: todosReducer,
  },
})