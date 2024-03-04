import { Resource } from "i18next";
import global_en from "../locales/en/translation.json";
import global_hr from "../locales/hr/translation.json";

const locales: Resource = {
  // first locale will be default locale
  en: {
    global: global_en,
  },
  hr: {
    global: global_hr,
  },
};

const defaultLocale = Object.keys(locales)[0];

export { locales, defaultLocale };
