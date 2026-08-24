import type { Dict } from '@/i18n/dictionaries';

export function Faq({ t }: { t: Dict }) {
  /* Разметка для поиска: вопросы могут попасть в выдачу отдельным блоком. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className="section section--faq">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="section__title">{t.faq.title}</h2>
        </div>

        <div className="faq">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq__item reveal" name="faq">
              <summary className="faq__q">
                {item.q}
                <span className="faq__sign" aria-hidden="true" />
              </summary>
              <div className="faq__a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
