import type { Dict } from '@/i18n/dictionaries';
import { cases, type CaseItem } from '@/content/site';
import { CaseShot } from './CaseShot';

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <path
      d="M3 13 13 3M6 3h7v7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Скелет под скриншот: свой набор блоков для лендинга, дашборда и телефона. */
function Skeleton({ item }: { item: CaseItem }) {
  if (item.phone) {
    return (
      <div className="mock__skeleton">
        <span className="ln w40" />
        <span className="bar" />
        <span className="ln w70" />
        <span className="ln w55" />
        <span className="bar bar--sm" />
        <span className="ln w60 accent" />
      </div>
    );
  }

  if (item.id === 'nutrient' || item.id === 'smartziyatker') {
    return (
      <div className="mock__skeleton mock__skeleton--dash">
        <div className="col">
          <span className="ln w70" />
          <span className="ln w50" />
          <span className="ln w60" />
        </div>
        <div className="col col--main">
          <span className="bar" />
          <div className="row">
            <span className="tile" />
            <span className="tile tile--accent" />
            <span className="tile" />
          </div>
          <span className="ln w80" />
          <span className="ln w45" />
        </div>
      </div>
    );
  }

  return (
    <div className="mock__skeleton mock__skeleton--land">
      <span className="ln w45 lg" />
      <span className="ln w70" />
      <div className="row">
        <span className="pillbar pillbar--accent" />
        <span className="pillbar" />
      </div>
      <span className="bar bar--sm" />
      <div className="row">
        <span className="tile" />
        <span className="tile" />
        <span className="tile" />
      </div>
    </div>
  );
}

function Case({ item, t }: { item: CaseItem; t: Dict }) {
  const copy = t.cases.items[item.id];
  const className = [
    'case',
    'reveal',
    item.featured && 'case--featured',
    item.reversed && 'case--rev',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={className} href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="case__media">
        <div className={`mock ${item.phone ? 'mock--phone' : 'mock--browser'}`}>
          {item.domain && (
            <div className="mock__bar">
              <i />
              <i />
              <i />
              <span className="mock__url">{item.domain}</span>
            </div>
          )}
          <CaseShot src={item.shot} chrome={Boolean(item.domain)} />
          <Skeleton item={item} />
        </div>
        <span className="case__open">{t.cases.open}</span>
      </div>

      <div className="case__body">
        <div className="case__top">
          <h3 className="case__title">{copy.title}</h3>
          <span className="case__kind">{copy.kind}</span>
        </div>

        <div className="task">
          <span className="lbl">{t.cases.task}</span>
          <p>{copy.task}</p>
        </div>

        <div className="res">
          <span className="lbl lbl--accent">{t.cases.result}</span>
          <span className="res__val" data-count={item.count}>
            {copy.value}
          </span>
          <span className="res__label">{copy.label}</span>
        </div>

        <div className="case__foot">
          <span className="case__link">
            {item.domain ?? t.cases.appStore} <ArrowIcon />
          </span>
          <span className="case__stack">{item.stack}</span>
        </div>
      </div>
    </a>
  );
}

export function Cases({ t }: { t: Dict }) {
  return (
    <section className="section section--cases" id="cases">
      <div className="container">
        <div className="section__head section__head--row reveal">
          <div>
            <p className="eyebrow">{t.cases.eyebrow}</p>
            <h2 className="section__title">{t.cases.title}</h2>
          </div>
          <p className="section__note">{t.cases.note}</p>
        </div>

        <div className="cases">
          {cases.map((item) => (
            <Case key={item.id} item={item} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
