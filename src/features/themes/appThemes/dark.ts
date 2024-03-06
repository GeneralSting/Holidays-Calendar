import { Theme, createTheme } from "@mui/material";
import i18next from "i18next";

const dark: Theme = createTheme({
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

const darkName = (): string => {
  return i18next.t("themes.dark");
};

const darkCode = "darkTheme";

export { dark, darkCode, darkName };
