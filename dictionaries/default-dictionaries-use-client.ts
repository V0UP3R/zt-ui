'use client';

import { i18n, Locale } from '@/i18n/config';
import { defaultDictionary } from './default-dictionaries';
import { interpolation } from './interpolation';

export const getDictionaryUseClient = (locale: Locale) => {
  const dictionary = defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale];
  return { dictionary, interpolation };
};