import type { Dict } from '@/i18n/dictionaries';
import { stack } from '@/content/site';

export function StackBlock({ t }: { t: Dict }) {
  return (
    <section className="section section--stack">
      <div className="container">
        <div className="stack reveal">
          <div>
            <p className="eyebrow">{t.stack.eyebrow}</p>
            <p className="stack__note">{t.stack.note}</p>
          </div>
          <ul className="stack__list">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
