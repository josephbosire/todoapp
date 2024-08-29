import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";
import DeleteTodoButton from "./DeleteTodoButton";

const TodoList = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  const { todos, setTodos } = context;
  const toggleTodoStatus = (todo: Todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding todos
        </li>
      )}
      {todos &&
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-8 h-[50px] 
        text-[14px] cursor-pointer border-b border-black/[8%]"
          >
            <span
              onClick={() => toggleTodoStatus(todo)}
              className={`${
                todo.isCompleted ? "line-through text-[#ccc]" : ""
              } `}
            >
              {todo.text}
            </span>{" "}
            <DeleteTodoButton id={todo.id} />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
