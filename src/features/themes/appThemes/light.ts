import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";

const lightTheme: Theme = createTheme({
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
});

const light = responsiveFontSizes(lightTheme);

const lightName = (): string => {
  return i18next.t("themes.light");
};

const lightCode = "lightTheme";

export { light, lightCode, lightName };
