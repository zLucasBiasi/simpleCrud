import More from "/public/assets/more.svg";

import * as S from "./styles";

export const TaskHeader = () => {
  return (
    <>
      <S.Section>
        <S.Wrapper>
          <label htmlFor="create">create new task</label>
          <S.Input id="create" type="text" />
        </S.Wrapper>

        <div>
          <S.Icon src={More} alt="Icone de lapis para editar" />
        </div>
      </S.Section>
    </>
  );
};
