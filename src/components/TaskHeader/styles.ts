import Image from "next/image";
import styled, { css } from "styled-components";

export const Form = styled.form`
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
    @media (max-width: 790px) {
      width: 90%;
      height: 10rem;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 2rem;
`;

export const Label = styled.label`
  @media (max-width: 790px) {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.background};
    padding: 0.2rem 0;
    width: 25rem;

    outline: 0;

    @media (max-width: 790px) {
      width: 100%;
    }
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

    @media (max-width: 790px) {
      width: 80%;
      height: 80%;
    }
  `}
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
