import type { Dict } from '@/i18n/dictionaries';
import { cases, telegramUrl } from '@/content/site';
import { HeroCanvas } from './HeroCanvas';

/* Домены запущенных проектов — соцдоказательство в первом экране:
   конкретные адреса убеждают лучше, чем обещание «делаем качественно». */
const liveDomains = cases
  .map((item) => item.domain)
  .filter((domain): domain is string => domain !== null);

export function Hero({ t }: { t: Dict }) {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow reveal">{t.hero.eyebrow}</p>

          <h1 className="hero__title reveal" style={{ '--d': '.05s' } as React.CSSProperties}>
            {t.hero.titleStart} <span className="accent-text">{t.hero.titleAccent}</span>,{' '}
            {t.hero.titleEnd}
          </h1>

          <p className="hero__sub reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
            {t.hero.sub}
          </p>

          <div className="hero__cta reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
            <a
              className="btn btn--accent btn--lg btn--arrow"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.common.discuss}
            </a>
            <a className="btn btn--ghost btn--lg" href="#cases">
              {t.common.ourWork}
            </a>
          </div>

          <p className="hero__trust reveal" style={{ '--d': '.2s' } as React.CSSProperties}>
            <span className="pulse" aria-hidden="true" />
            {t.hero.trust}
          </p>

          <div className="hero__proof reveal" style={{ '--d': '.25s' } as React.CSSProperties}>
            <span className="hero__proof-lbl">{t.hero.proofLabel}</span>
            <ul className="hero__proof-list">
              {liveDomains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="hero__visual reveal"
          style={{ '--d': '.2s' } as React.CSSProperties}
          aria-hidden="true"
        >
          <HeroCanvas />
          <div className="panel panel--code">
            <div className="panel__bar">
              <i />
              <i />
              <i />
            </div>
            <div className="panel__body">
              <span className="ln w70" />
              <span className="ln w45 accent" />
              <span className="ln w85" />
              <span className="ln w30" />
              <span className="ln w60" />
              <span className="ln w50 accent" />
              <span className="ln w75" />
            </div>
          </div>

          <div className="panel panel--chip">
            <span className="pulse" />
            <div>
              <b>deploy: success</b>
              <small>production · 1.2s</small>
            </div>
          </div>

          <div className="panel panel--phone">
            <span className="ln w60" />
            <span className="ln w90" />
            <span className="ln w40 accent" />
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="facts reveal" style={{ '--d': '.25s' } as React.CSSProperties}>
          {t.facts.map((f) => (
            <li key={f.label}>
              <b>{f.value}</b>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
