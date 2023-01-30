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

  const editTask = () => {
    const editTask = prompt("O que deseja colocar no lugar?");
    setList((prev) =>
      prev?.map((item) => {
        if (item.id === id) {
          return { ...item, name: editTask };
        }
        return item;
      })
    );
  };

  return (
    <S.Section>
      <S.Task suppressHydrationWarning>{task}</S.Task>

      <S.Actions>
        <S.Icon
          suppressHydrationWarning
          src={Edit}
          alt="Icone de lapis para editar"
          onClick={editTask}
        />
        <S.Icon
          suppressHydrationWarning
          src={Delete}
          alt="Icone de lixeira para remover"
          onClick={removeTask}
        />
      </S.Actions>
    </S.Section>
  );
};
