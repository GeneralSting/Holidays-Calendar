import { Theme, createTheme } from "@mui/material";

export const light: Theme = createTheme({
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
});

export const lightCode = "lightTheme";
export const lightName = "Light Theme";
