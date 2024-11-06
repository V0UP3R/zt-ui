import 'server-only';

import { defaultDictionary } from './default-dictionaries';
import { interpolation } from './interpolation';
import { i18n, Locale } from '@/i18n/config';


export const getDictionaryServerOnly = (locale: Locale) => {
  const dictionary = defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale];
  return { dictionary, interpolation };
};