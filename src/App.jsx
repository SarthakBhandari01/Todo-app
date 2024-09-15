import TodoList from "./Components/ToDoList/toDoList";
import AddTask from "./Components/AddTask/addTask";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, editTodo, deleteTodo, finishTodo } from "./Slice/TodoSlice";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, deleteTodo, editTodo, finishTodo },
    dispatch
  );
  return (
    <div>
      <AddTask addTodo={actions.addTodo} />
      <TodoList
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
        finishTodo={actions.finishTodo}
      />
    </div>
  );
}

export default App;
