import { useState } from "react";
function Todo({ editTodo, deleteTodo, text, isCompleted, finishTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => finishTodo(!isCompleted)}
      />
      <span className={`${isCompleted ? "line-through" : null}`}>
        {isEditing ? (
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        ) : (
          todoText
        )}
      </span>
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          editTodo(todoText);
        }}
        className={`btn btn-primary mx-3`}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={deleteTodo} className="btn btn-primary mx-2">
        Delete
      </button>
    </div>
  );
}
export default Todo;
