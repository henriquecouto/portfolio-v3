import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b2ec5",
      dark: "#212141",
    },
    secondary: {
      main: "#e9e9ec",
      dark: "#b8b8e3",
    },
    error: {
      main: "#e74c3c",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#212141",
      secondary: "#3b2ec5",
      hint: "#fff",
    },
  },
  typography: {
    button: {
      fontSize: 16,
      fontWeight: 700,
    },
    h1: {
      fontFamily: "Bebas Neue",
    },
    h2: {
      fontFamily: "Bebas Neue",
      fontSize: 53,
      lineHeight: 1,
    },
    h3: {
      fontSize: 37,
      lineHeight: 1,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Bebas Neue",
      fontSize: 27,
    },
    body1: {
      fontSize: 19,
      lineHeight: 1,
    },
  },
});

export default theme;
