import Image from "next/image";
import styled, { css } from "styled-components";

export const Section = styled.form`
  ${({ theme }) => css`
    width: 70rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.cards};
    padding: 0 2rem;
    border-radius: 0.4rem;
    @media (max-width: 790px) {
      width: 90%;
      height: 10rem;
    }
  `}
`;
export const Task = styled.h2`
  font-weight: 500;
  @media (max-width: 790px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.5rem;
`;

export const Icon = styled(Image)`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    transition: 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.background};
      border-radius: 0.4rem;
    }
  `}
`;
