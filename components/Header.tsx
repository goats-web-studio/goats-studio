'use client';

import { useEffect, useState } from 'react';
import { LangSwitch } from './LangSwitch';
import type { Dict } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';

const SECTIONS = ['services', 'prices', 'cases', 'process', 'contact'] as const;

export function Header({ t, locale }: { t: Dict; locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="container header__inner">
        <a className="logo" href="#home" aria-label={`GOATS — ${t.common.home}`}>
          <span className="logo__mark" />
          <span className="logo__text">GOATS</span>
        </a>

        <nav className="nav" id="nav" aria-label={t.common.menu}>
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LangSwitch locale={locale} label={t.common.language} />
          <a className="btn btn--sm btn--dark" href="#contact">
            {t.common.discuss}
          </a>
          <button
            className="burger"
            id="burger"
            aria-label={t.common.menu}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="progress" id="progress" aria-hidden="true" />
    </header>
  );
}
