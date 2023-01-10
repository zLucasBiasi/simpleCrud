import More from "/public/assets/more.svg";

import * as S from "./styles";

export const TaskHeader = () => {
  return (
    <>
      <S.Section>
        <h2>Adicionar nova tarefa</h2>

        <div>
          <S.Icon src={More} alt="Icone de lapis para editar" />
        </div>
      </S.Section>
    </>
  );
};
