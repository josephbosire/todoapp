/// <reference types="vite/client" />
type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

type AddTodoListProps = {
  addTodos: (text: string) => void;
};
