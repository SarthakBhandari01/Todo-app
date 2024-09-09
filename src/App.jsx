import { useReducer } from "react";
import TodoList from "./Components/ToDoList/toDoList";
import AddTask from "./Components/AddTask/addTask";
import TodoContext from "./Context/TodoContext";
import TodoReducer from "./Reducers/TodoReducers";

function App() {
  const [todos,dispatch]=useReducer(TodoReducer,[]);
  return (
    <div>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTask />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
