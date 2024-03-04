import { ThemeMenu } from "../types/themeMenu";
import { dark, darkCode, darkName } from "./dark";
import { light, lightCode, lightName } from "./light";
import {
  lightIncreased,
  lightIncreasedCode,
  lightIncreasedName,
} from "./lightIncreased";
import { solarized, solarizedCode, solarizedName } from "./solarized";

const themes: ThemeMenu[] = [
  // first theme object will be default theme
  {
    name: lightName,
    code: lightCode,
    theme: light,
  },
  {
    name: lightIncreasedName,
    code: lightIncreasedCode,
    theme: lightIncreased,
  },
  {
    name: darkName,
    code: darkCode,
    theme: dark,
  },
  {
    name: solarizedName,
    code: solarizedCode,
    theme: solarized,
  },
];

const defaultTheme = themes[0].code;

export { themes, defaultTheme };
