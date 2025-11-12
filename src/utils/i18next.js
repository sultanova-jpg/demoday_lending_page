
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";   
import enTranslation from "../locales/en/enTranslation.json"
import rusTranslation from "../locales/rus/rusTranslation.json"
import uzTranslation from "../locales/uz/uzTranslation.json"
i18n
  .use(initReactI18next) 
  .init({
      resources: {
      en: {
        translation: enTranslation
      },
      rus: {
        translation: rusTranslation
      },
      uz: {
        translation: uzTranslation
      },
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });