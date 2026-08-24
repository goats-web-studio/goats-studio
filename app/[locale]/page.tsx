import { notFound } from 'next/navigation';

import { getDict } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';
import { site, telegramUrl } from '@/content/site';

import { ScrollEffects } from '@/components/ScrollEffects';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pain } from '@/components/Pain';
import { Services } from '@/components/Services';
import { Packages } from '@/components/Packages';
import { Cases } from '@/components/Cases';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { StackBlock } from '@/components/StackBlock';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { MobileBar } from '@/components/MobileBar';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDict(locale);

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GOATS',
    description: t.meta.description,
    url: `${site.url}/${locale}`,
    areaServed: 'KZ',
    address: { '@type': 'PostalAddress', addressLocality: 'Aktau', addressCountry: 'KZ' },
    sameAs: [telegramUrl],
  };

  return (
    <>
      <a className="skip" href="#services">
        {t.common.skip}
      </a>

      <Header t={t} locale={locale} />

      <main>
        <Hero t={t} />
        <Pain t={t} />
        <Services t={t} />
        <Packages t={t} locale={locale} />
        <Cases t={t} />
        <Process t={t} />
        <WhyUs t={t} />
        <StackBlock t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
      <MobileBar t={t} />
      <ScrollEffects />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </>
  );
}
