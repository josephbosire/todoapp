import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createContext, useEffect, useState } from "react";

type TodoContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodos: (text: string) => void;
};
type TodosContextProviderProps = {
  children: React.ReactNode;
};
interface InitialTodoOperation {
  (): Todo[];
}
export const TodosContext = createContext<TodoContext | null>(null);

const getInitialTodos: InitialTodoOperation = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
};

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const totalNumberOfTodos = todos.length;
  const { isAuthenticated } = useKindeAuth();
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const addTodos = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("You need to be logged in");
      return;
    } else {
      const upddatedTodos: Todo[] = [
        ...todos,
        {
          id: todos.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ];
      setTodos(upddatedTodos);
    }
  };
  const fetchTodos = async () => {
    const response = await fetch(
      "https://bytegrad.com/course-assets/api/todos"
    );
    const todos = await response.json();
    setTodos(todos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        setTodos,
        addTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
