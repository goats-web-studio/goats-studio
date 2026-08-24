import type { Dict } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { packages, formatPrice, telegramUrl } from '@/content/site';

export function Packages({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <section className="section section--prices" id="prices">
      <div className="container">
        <div className="section__head section__head--row reveal">
          <div>
            <p className="eyebrow">{t.packages.eyebrow}</p>
            <h2 className="section__title">{t.packages.title}</h2>
          </div>
          <p className="section__note">{t.packages.note}</p>
        </div>

        <div className="plans">
          {packages.map((pkg, i) => {
            const copy = t.packages.items[pkg.id];
            return (
              <article
                key={pkg.id}
                className={`plan reveal${pkg.featured ? ' plan--featured' : ''}`}
                style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}
              >
                {pkg.featured && <span className="plan__badge">{t.packages.popular}</span>}

                <h3 className="plan__title">{copy.title}</h3>
                <p className="plan__for">{copy.for}</p>

                <p className="plan__price">
                  <span className="plan__from">{t.common.from}</span>
                  <b>{formatPrice(pkg.price, locale)}</b>
                  <span className="plan__cur">{t.common.currency}</span>
                </p>

                <p className="plan__term">
                  <span className="lbl">{t.packages.termLabel}</span>
                  {copy.term}
                </p>

                <span className="lbl plan__lbl">{t.packages.includes}</span>
                <ul className="plan__list">
                  {copy.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  className={`btn ${pkg.featured ? 'btn--accent' : 'btn--ghost'} plan__cta`}
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.packages.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
