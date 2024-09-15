import todoReducer from "./Slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools:true
});

export default store;
