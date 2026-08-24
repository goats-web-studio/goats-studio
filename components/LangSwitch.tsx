'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeMeta, type Locale } from '@/i18n/config';

/* Меняет только первый сегмент пути, остальное сохраняет: /kk/... -> /en/... */
export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.split('/').slice(2).join('/');

  return (
    <div className="lang" role="group" aria-label={label}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest ? `/${rest}` : ''}`}
          className={`lang__item${l === locale ? ' is-active' : ''}`}
          hrefLang={localeMeta[l].htmlLang}
          aria-current={l === locale ? 'true' : undefined}
          title={localeMeta[l].label}
        >
          {localeMeta[l].short}
        </Link>
      ))}
    </div>
  );
}
