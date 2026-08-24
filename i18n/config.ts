export const locales = ['ru', 'kk', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

/** Подписи переключателя языков и атрибут lang/hreflang. */
export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  ru: { label: 'Русский', short: 'RU', htmlLang: 'ru-KZ' },
  kk: { label: 'Қазақша', short: 'KZ', htmlLang: 'kk-KZ' },
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
};

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
