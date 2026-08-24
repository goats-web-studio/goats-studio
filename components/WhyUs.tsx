import type { Dict } from '@/i18n/dictionaries';

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <path
      d="m4 10.5 4 4 8-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function WhyUs({ t }: { t: Dict }) {
  return (
    <section className="section section--why">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 className="section__title">{t.why.title}</h2>
        </div>

        <ul className="why">
          {t.why.items.map((item, i) => (
            <li
              key={item.title}
              className="why__item reveal"
              style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
            >
              <span className="why__icon">
                <CheckIcon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
