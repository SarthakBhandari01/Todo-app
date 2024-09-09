import { useContext } from "react";
import Todo from "../Todo/todo";
import TodoContext from "../../Context/TodoContext";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  function onDeleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }
  function onEditTodo(id, newTodo) {
    dispatch({ type: "edit_todo", payload: { id, newTodo } });
  }
  function onFinishTodo(state, id) {
    dispatch({ type: "finish_todo", payload: { id, state } });
  }
  return (
    <>
      <div>your tasks</div>
      {todos &&
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
              deleteTodo={() => onDeleteTodo(todo.id)}
              isCompleted={todo.isCompleted}
              text={todo.text}
              finishTodo={(state) => onFinishTodo(state, todo.id)}
            />
          );
        })}
    </>
  );
}
export default TodoList;
