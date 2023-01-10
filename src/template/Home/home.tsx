import { ReactNode } from "react";

import * as S from "./styles";

export const HomeTemplate = ({ children }: { children: ReactNode }) => {
  return <S.Main>{children}</S.Main>;
};
