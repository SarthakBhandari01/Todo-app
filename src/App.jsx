import { useState } from "react";
import TodoList from "./Components/ToDoList/toDoList";
import AddTask from "./Components/AddTask/addTask";
import TodoContext from "./Context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <AddTask />
        <TodoList todos={todos} setTodos={setTodos} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
