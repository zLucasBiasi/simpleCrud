import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Global from "../styles/global";
import { themes } from "../styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
