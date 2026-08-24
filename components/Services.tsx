import type { Dict } from '@/i18n/dictionaries';

export function Services({ t }: { t: Dict }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section__title">{t.services.title}</h2>
        </div>

        <div className="cards">
          {t.services.items.map((item, i) => (
            <article
              key={item.title}
              className={`card reveal${i === t.services.items.length - 1 ? ' card--wide' : ''}`}
              style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
            >
              <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
