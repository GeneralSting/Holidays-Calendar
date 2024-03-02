import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "../locales/en/translation.json";
import global_hr from "../locales/hr/translation.json";
import LanguageStorage from "../../headerOptions/models/languageStorage";

const i18nInitializer = () => {
  const languageStorage = new LanguageStorage();
  i18n.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    resources: {
      en: {
        global: global_en,
      },
      hr: {
        global: global_hr,
      },
    },
    lng: languageStorage.getValue(),
  });
  return i18n;
};

export default i18nInitializer;
