import type { Dict } from '@/i18n/dictionaries';
import { telegramUrl } from '@/content/site';

/* Тёмная полоса сразу после кейсов: ловим посетителя на пике доверия,
   пока он не ушёл скроллить оставшиеся четыре секции до контактов. */
export function CtaStrip({ t }: { t: Dict }) {
  return (
    <section className="strip">
      <div className="container">
        <div className="strip__inner reveal" data-glow>
          <div className="strip__text">
            <h2 className="strip__title">{t.cta.strip.title}</h2>
            <p className="strip__note">{t.cta.strip.note}</p>
          </div>
          <div className="strip__cta">
            <a
              className="btn btn--light btn--lg btn--arrow"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.common.discuss}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
