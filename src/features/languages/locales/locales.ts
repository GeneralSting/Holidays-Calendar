import i18next, { Resource } from "i18next";
import global_en from "../locales/en/translation.json";
import global_hr from "../locales/hr/translation.json";
import { Language } from "../types/languages";
import localeLanguages from "../utils/localeLanguages";

const locales: Resource = {
  // first locale will be default locale
  en: {
    global: global_en,
  },
  hr: {
    global: global_hr,
  },
};

let languages: Language[] = [];

i18next.on("languageChanged", (lang: string) => {
  languages = localeLanguages(lang);
});

const defaultLocale = Object.keys(locales)[0];

export { locales, defaultLocale, languages };
