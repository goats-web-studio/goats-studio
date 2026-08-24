import type { Dict } from '@/i18n/dictionaries';

export function Process({ t }: { t: Dict }) {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="section__title">{t.process.title}</h2>
        </div>

        <ol className="steps">
          {t.process.steps.map((step, i) => (
            <li
              key={step.title}
              className="step reveal"
              style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
            >
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <p className="step__get">
                  <span className="lbl lbl--accent">{t.process.youGet}</span>
                  {step.deliverable}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="about reveal">
          <p className="about__text">{t.process.about}</p>
        </div>
      </div>
    </section>
  );
}
