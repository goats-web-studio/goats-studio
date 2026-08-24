import type { Dict } from '@/i18n/dictionaries';
import { site, telegramUrl, whatsappUrl } from '@/content/site';

export function Contact({ t }: { t: Dict }) {
  return (
    <section className="section cta" id="contact">
      <div className="container cta__inner reveal">
        <div className="cta__left">
          <h2 className="cta__title">{t.cta.title}</h2>
          <p className="cta__text">{t.cta.text}</p>
          <p className="cta__reply">
            <span className="pulse" aria-hidden="true" />
            {t.cta.reply}
          </p>
        </div>

        <div className="contacts">
          <span className="contacts__label">{t.cta.contactsLabel}</span>

          <a className="contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact__label">WhatsApp</span>
            <span className="contact__value">{site.whatsappDisplay}</span>
          </a>

          <a className="contact" href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact__label">Telegram</span>
            <span className="contact__value">@{site.telegram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
