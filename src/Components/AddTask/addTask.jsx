import { useState } from "react";


function AddTask({addTodo}) {
  const [todoText, setTodoText] = useState(""); 
  
  function onAddTodo(todoText) {
    addTodo({todoText});
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
