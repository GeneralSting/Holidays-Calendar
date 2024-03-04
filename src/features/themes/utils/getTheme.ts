import { themes } from "..";

const getTheme = (themeCode: string) => {
  const selectedTheme = themes.find((theme) => theme.code === themeCode);
  return selectedTheme ? selectedTheme.theme : themes[0].theme;
};

export default getTheme;
