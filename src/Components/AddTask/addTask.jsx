import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";


function AddTask() {
  const {dispatch}=useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  function onAddTodo(todoText) {
    dispatch({type:"add_todo", payload:{todoText}});
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
