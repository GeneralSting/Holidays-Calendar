import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, locales } from "..";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  resources: locales,
  lng: defaultLocale,
});
