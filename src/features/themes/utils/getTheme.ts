import {
  dark,
  darkCode,
  light,
  lightCode,
  lightIncreased,
  lightIncreasedCode,
  solarized,
  solarizedCode,
} from "..";

const getTheme = (themeName: string) => {
  switch (themeName) {
    case lightCode:
      return light;
    case lightIncreasedCode:
      return lightIncreased;
    case darkCode:
      return dark;
    case solarizedCode:
      return solarized;
    default:
      return light;
  }
};

export default getTheme;
