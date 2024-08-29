import useTodosContext from "../lib/hooks/hooks";

type DeleteTodoButtonProps = {
  id: number;
};

const DeleteTodoButton: React.FC<DeleteTodoButtonProps> = ({ id }) => {
  const { setTodos } = useTodosContext();
  return (
    <button
      onClick={() => {
        setTodos((prevTodos: Todo[]) =>
          prevTodos.filter((todo) => todo.id !== id)
        );
      }}
    >
      ❌
    </button>
  );
};

export default DeleteTodoButton;
