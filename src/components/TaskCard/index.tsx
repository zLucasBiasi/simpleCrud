import Edit from "/public/assets/edit.svg";
import Delete from "/public/assets/delete.svg";

import { useContext } from "react";
import { newTaskContext } from "../../context/addNewTask";

import * as S from "./styles";

export const TaskCard = ({ task, id }: { task: string; id: string }) => {
  const { setList } = useContext(newTaskContext);

  const removeTask = () => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <S.Section>
        <h2>{task}</h2>

        <S.Actions>
          <S.Icon src={Edit} alt="Icone de lapis para editar" />
          <S.Icon
            src={Delete}
            alt="Icone de lixeira para remover"
            onClick={removeTask}
          />
        </S.Actions>
      </S.Section>
    </>
  );
};
