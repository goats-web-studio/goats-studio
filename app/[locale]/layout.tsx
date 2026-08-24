import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { getDict } from '@/i18n/dictionaries';
import { locales, localeMeta, isLocale, defaultLocale, type Locale } from '@/i18n/config';
import { site } from '@/content/site';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = getDict(locale);
  const path = (l: Locale) => `${site.url}/${l}`;

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: path(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, path(l)])),
        'x-default': path(defaultLocale),
      },
    },
    openGraph: {
      type: 'website',
      title: t.meta.ogTitle,
      description: t.meta.description,
      url: path(locale),
      siteName: 'GOATS',
      locale: localeMeta[locale].htmlLang.replace('-', '_'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.description,
    },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    },
  };
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeMeta[locale].htmlLang} className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
