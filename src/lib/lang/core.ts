import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { LANG_TRANSLATION } from '../../lang';

import { LANG_DEFAULT } from './constant';

i18n.use(initReactI18next).init({
  resources: LANG_TRANSLATION,
  fallbackLng: LANG_DEFAULT,
  interpolation: {
    escapeValue: false,
  },

});

export { i18n };
