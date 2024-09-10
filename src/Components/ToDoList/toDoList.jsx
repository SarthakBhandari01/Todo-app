import Todo from "../Todo/todo";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

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
