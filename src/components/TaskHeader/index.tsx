import More from "/public/assets/more.svg";
import { useContext, useState } from "react";
import { newTaskContext } from "../../context/addNewTask";

import * as S from "./styles";

export const TaskHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const { setList } = useContext(newTaskContext);

  const addTask = () => {
    if (inputValue.trim().length === 0) {
      return;
    } else {
      setList((prev) => [
        ...prev,
        { name: inputValue, id: crypto.randomUUID() },
      ]);
      setInputValue("");
    }
  };
  return (
    <>
      <S.Form
        onSubmit={(e) => {
          addTask();
          e.preventDefault();
        }}
      >
        <S.Wrapper>
          <S.Label htmlFor="create">create new task</S.Label>
          <S.Input
            id="create"
            type="text"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </S.Wrapper>
        <S.Button>
          <S.Icon src={More} alt="Icone de mais para adicionar" />
        </S.Button>
      </S.Form>
    </>
  );
};
