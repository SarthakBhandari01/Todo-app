import { combineReducers, createStore } from "redux";
import TodoReducer from "./Reducers/TodoReducers";

const reducer = combineReducers({ todos: TodoReducer });
const store = createStore(reducer);

export default store;
