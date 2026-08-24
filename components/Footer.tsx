import type { Dict } from '@/i18n/dictionaries';
import { site, telegramUrl } from '@/content/site';

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="logo" href="#home" aria-label={`GOATS — ${t.common.home}`}>
          <span className="logo__mark" />
          <span className="logo__text">GOATS</span>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} — {t.footer.tagline}
        </p>
        <a className="footer__tg" href={telegramUrl} target="_blank" rel="noopener noreferrer">
          @{site.telegram}
        </a>
      </div>
    </footer>
  );
}
