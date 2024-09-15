import Todo from "../Todo/todo";
import { useSelector } from "react-redux";

function TodoList({ editTodo, deleteTodo, finishTodo }) {
  const todos = useSelector((state) => state.todos.todoList);
  function onDeleteTodo(id) {
    deleteTodo({ id });
  }
  function onEditTodo(id, newTodo) {
    editTodo({ id, newTodo });
  }
  function onFinishTodo(state, id) {
    finishTodo({ id, state });
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
