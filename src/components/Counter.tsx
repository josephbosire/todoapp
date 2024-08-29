import useTodosContext from "../lib/hooks/hooks";

const Counter = () => {
  const { totalNumberOfTodos, numberOfCompletedTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
};

export default Counter;
