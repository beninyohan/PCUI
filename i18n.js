import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';
import gu from './locales/gu.json';

I18n.fallbacks = true;
I18n.translations = { en, hi, mr, gu };

export async function initI18n() {
  try {
    const saved = await AsyncStorage.getItem('appLanguage');
    if (saved) {
      I18n.locale = saved;
    } else {
      const deviceLocale = Localization.locale ? Localization.locale.split('-')[0] : 'en';
      I18n.locale = Object.keys(I18n.translations).includes(deviceLocale) ? deviceLocale : 'en';
    }
  } catch (e) {
    I18n.locale = 'en';
  }
}

export function setLanguage(lang) {
  I18n.locale = lang;
  AsyncStorage.setItem('appLanguage', lang);
}

export default I18n;
