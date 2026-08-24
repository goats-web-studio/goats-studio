import type { MetadataRoute } from 'next';
import { locales, localeMeta, defaultLocale } from '@/i18n/config';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    changeFrequency: 'monthly',
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [localeMeta[l].htmlLang, `${site.url}/${l}`]),
      ),
    },
  }));
}
