import { v4 as uuidv4 } from "uuid";

function TodoReducer(state = [], action) {
  if (action.type == "add_todo") {
    return [
      ...state,
      { id: uuidv4(), text: action.payload.todoText, isCompleted: false },
    ];
  } else if (action.type == "delete_todo") {
    const newTodoList = state.filter((todo) => {
      return todo.id !== action.payload.id;
    });
    return newTodoList;
  } else if (action.type == "finish_todo") {
    const newTodos = state.map((todo) => {
      if (todo.id == action.payload.id) {
        todo.isCompleted = action.payload.state;
      }
      return todo;
    });
    return newTodos;
  } else if (action.type == "edit_todo") {
    const newTodos = state.map((todo) => {
      if (todo.id == action.payload.id) {
        todo.text = action.payload.newTodo;
      }
      return todo;
    });
    return newTodos;
  }
  return state;
}
export default TodoReducer;
