import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { NewTaskProvider } from "../context/addNewTask";

import Global from "../styles/global";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NewTaskProvider>
        <ThemeProvider theme={theme}>
          <Global />
          <Component {...pageProps} />
        </ThemeProvider>
      </NewTaskProvider>
    </>
  );
}
