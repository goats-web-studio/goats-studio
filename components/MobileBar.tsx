import type { Dict } from '@/i18n/dictionaries';
import { telegramUrl, whatsappUrl } from '@/content/site';

/* Панель связи, закреплённая снизу на телефоне: с любого экрана — один тап до диалога. */
export function MobileBar({ t }: { t: Dict }) {
  return (
    <div className="mbar">
      <a
        className="btn btn--accent mbar__btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="btn btn--dark mbar__btn"
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
      <span className="visually-hidden">{t.cta.contactsLabel}</span>
    </div>
  );
}
