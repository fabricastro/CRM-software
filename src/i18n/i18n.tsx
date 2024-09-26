import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  en: {
    translation: {
      bill: 'BIll',
      billGen: 'Generate Bill',
    },
  },
  es: {
    translation: {
      bill: 'Factura',
      billGen: 'Generar Factura',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
