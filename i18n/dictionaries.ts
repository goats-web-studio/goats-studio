import { ru } from './locales/ru';
import { kk } from './locales/kk';
import { en } from './locales/en';
import type { Dict } from './locales/ru';
import type { Locale } from './config';

const dictionaries: Record<Locale, Dict> = { ru, kk, en };

export const getDict = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
