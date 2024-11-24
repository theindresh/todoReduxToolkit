import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList: [{
        id: nanoid(),
        title: 'Hello Indresh',
        completed: false,
    }],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false,
            };
            state.todoList.push(todo);
        },
        toggleComplete: (state,action)=>{
            const index = state.todoList.findIndex(todo=>todo.id === action.payload.id);
            state.todoList[index].completed = action.payload.completed;
        },
        deleteTodo: (state,action)=>{
            state.todoList = state.todoList.filter(todo=>todo.id !== action.payload.id);
        },
        updateTodo: (state,action)=>{
            const index = state.todoList.findIndex(todo=>todo.id === action.payload.id);
            state.todoList[index].title = action.payload.title;
        },
        renameTodo: (state,action)=>{
            const index = state.todoList.findIndex(todo=>todo.id === action.payload.id);
            state.todoList[index].title = action.payload.title;
        }
    }
})

export const {addTodo,toggleComplete,deleteTodo,updateTodo,renameTodo} = todoSlice.actions;

export default todoSlice.reducer;