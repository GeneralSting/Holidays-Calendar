import { Theme, createTheme } from "@mui/material";

export const solarized: Theme = createTheme({
  palette: {
    primary: {
      main: "#586e75", // Blue
    },
    background: {
      default: "#002b36", // Base03
      paper: "#073642", // Base02
    },
    text: {
      primary: "#839496", // Base0
      secondary: "#93a1a1", // Base1
    },
  },
  typography: {
    fontFamily: "Menlo, Consolas, 'Courier New', monospace", // Monospaced font
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "italic",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});

export const solarizedCode = "solarizedTheme";
export const solarizedName = "Solarized Theme";
