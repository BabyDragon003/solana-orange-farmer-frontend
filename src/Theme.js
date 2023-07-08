import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17215E",
    },
    secondary: {
      main: "#f4b52d",
    },
    text: {
      primary: "#17215E",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 16,
    },
    allVariants: {
      color: "#17215E",
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 400,
          fontSize: "1.2rem",
          padding: "10px",
          minWidth: 138,
        },
        contained: {
          boxShadow: "6px 6px 20px 6px #00000096",
        },
        containedSecondary: {
          color: "#17215E",
        },
      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
