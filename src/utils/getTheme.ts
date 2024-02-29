import {
  darkTheme,
  lightTheme,
  lightThemeIncreased,
  solarizedTheme,
} from "../features/themes";

const getTheme = (themeName: string) => {
  switch (themeName) {
    case "light":
      return lightTheme;
    case "lightIncreased":
      return lightThemeIncreased;
    case "dark":
      return darkTheme;
    case "solarized":
      return solarizedTheme;
    default:
      return lightTheme;
  }
};

export default getTheme;
