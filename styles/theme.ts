import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b2ec5",
      dark: "#212141",
    },
    secondary: {
      main: "#e9e9ec",
      dark: "#4d4d67",
    },
    error: {
      main: "#e74c3c",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
