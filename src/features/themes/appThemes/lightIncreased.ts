import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";

const lightIncreasedTheme: Theme = createTheme({
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Default font family
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "2.625rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.875rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.75rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.625rem", // 16px + 2px = 18px
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.5rem", // 16px + 2px = 18px
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "1.375rem", // 16px + 2px = 18px
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.25rem", // 16px + 2px = 18px
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.125rem", // 16px + 2px = 18px
      fontWeight: 400,
    },
    button: {
      fontSize: "1.125rem", // 16px + 2px = 18px
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "1rem", // 16px + 2px = 18px
      fontWeight: 400,
    },
    overline: {
      fontSize: "1rem", // 16px + 2px = 18px
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});

const lightIncreased = responsiveFontSizes(lightIncreasedTheme);

const lightIncreasedName = (): string => {
  return i18next.t("themes.lightIncreased");
};

const lightIncreasedCode = "lightThemeIncreased";

export { lightIncreased, lightIncreasedCode, lightIncreasedName };
