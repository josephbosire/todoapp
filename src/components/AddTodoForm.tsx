import Button from "./Button";
import useTodosContext from "../lib/hooks/hooks";
import { useState } from "react";

const AddTodoForm = () => {
  const { addTodos } = useTodosContext();
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodos(todoText);
    setTodoText("");
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2 className="font-medium text-[#231d15]">Add Todo</h2>
        <input
          name="text"
          className="pt-[16px] h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
          type="text"
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
          value={todoText}
        />
        <Button>Add to List </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
