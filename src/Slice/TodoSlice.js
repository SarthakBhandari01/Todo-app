import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; 

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: uuidv4(),
        text: action.payload.todoText,
        isCompleted: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id != action.payload.id;
      });
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.text = action.payload.newTodo;
        }
        return todo;
      });
    },
    finishTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.isCompleted = action.payload.state;
        }
        return todo;
      });
    },
  },
});

export const {deleteTodo,finishTodo,addTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer; 