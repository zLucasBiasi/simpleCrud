import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    color: ${theme.colors.white};
    overflow-x: hidden;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${theme.colors.background};
    font-family: "Poppins", sans-serif;
  }
`}
`;
