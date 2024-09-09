import { useContext } from "react";
import Todo from "../Todo/todo";
import TodoContext from "../../Context/TodoContext";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  function onDeleteTodo(id) {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  }
  function onEditTodo(id, newTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  function onFinishTodo(state, id) {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = state;
      }
      return todo;
    });
    setTodos(newTodos);
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
