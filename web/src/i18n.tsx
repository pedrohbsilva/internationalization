import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en-us/translation.json';
import pt from './locales/pt-br/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en},
      pt: { translation: pt},
    },
    lng: 'en',
    fallbackLng: ['en', 'pt']
  });

  export default i18n