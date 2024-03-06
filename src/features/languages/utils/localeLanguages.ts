import { locales } from "..";
import { Language } from "../types/languages";

const localeLanguages = (currentLang: string): Language[] => {
  const languagesNames: Language[] = [];

  // Iterate through each language in locales
  for (const langKey in locales) {
    if (Object.prototype.hasOwnProperty.call(locales, langKey)) {
      const language = locales[langKey];

      // Check if langKey is equal to i18next language
      if (langKey === currentLang) {
        // Check if locales[langKey].global is an object and not null
        if (typeof language.global === "object" && language.global !== null) {
          const langGlobal = language.global;

          // Check if languages exists within langGlobal
          if ("languages" in langGlobal) {
            for (const abbr of Object.keys(langGlobal.languages)) {
              // Push object containing language abbreviation and name into languages array
              languagesNames.push({ abbr, name: langGlobal.languages[abbr] });
            }
          } else {
            console.log(`languages doesn't exist in ${langKey}.global`);
          }
        } else {
          console.log(`${langKey}.global is not an object`);
        }
      }
    }
  }

  return languagesNames;
};

export default localeLanguages;
