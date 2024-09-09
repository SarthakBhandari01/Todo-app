import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const { todos, setTodos } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  function onAddTodo(todoText) {
    setTodos([...todos, { id: uuidv4(), text: todoText, isCompleted: false }]);
    setTodoText("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter task here..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={() => onAddTodo(todoText)} className="btn btn-primary">
        submit
      </button>
    </div>
  );
}
export default AddTask;
