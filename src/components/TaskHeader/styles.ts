import Image from "next/image";
import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 70rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.cards};
    padding: 0 2rem;
    border-radius: 0.4rem;
    margin-bottom: 3rem;
  `}
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
