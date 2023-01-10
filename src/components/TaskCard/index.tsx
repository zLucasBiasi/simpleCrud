import Edit from "/public/assets/edit.svg";
import Delete from "/public/assets/delete.svg";

import * as S from "./styles";

export const TaskCard = ({ task }: { task: string }) => {
  return (
    <>
      <S.Section>
        <h2>{task}</h2>

        <S.Actions>
          <S.Icon src={Edit} alt="Icone de lapis para editar" />
          <S.Icon src={Delete} alt="Icone de lixeira para remover" />
        </S.Actions>
      </S.Section>
    </>
  );
};
