import { Theme, createTheme } from "@mui/material";

export const dark: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});

export const darkCode = "darkTheme";
export const darkName = "Dark Theme";
