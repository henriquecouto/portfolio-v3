import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import { SnackbarProvider } from "notistack";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Henrique Couto | Desenvolvedor Web e Mobile</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Sou desenvolvedor Web e Mobile e fiz esse site com o intuito de postar alguns conteúdos legais sobre o mundo da programação."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Node, NodeJS, Typescript, React Native, Frontend, Backend"
        />
        <meta name="author" content="Henrique Couto" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
