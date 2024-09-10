import TodoList from "./Components/ToDoList/toDoList";
import AddTask from "./Components/AddTask/addTask";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AddTask />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
