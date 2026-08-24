import type { Dict } from '@/i18n/dictionaries';

export function Pain({ t }: { t: Dict }) {
  return (
    <section className="section section--pain">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{t.pain.eyebrow}</p>
          <h2 className="section__title">{t.pain.title}</h2>
        </div>

        <ul className="pains">
          {t.pain.items.map((item, i) => (
            <li
              key={item.title}
              className="pain reveal"
              style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
            >
              <span className="pain__mark" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="pain__bridge reveal">{t.pain.bridge}</p>
      </div>
    </section>
  );
}
