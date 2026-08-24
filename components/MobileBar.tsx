import type { Dict } from '@/i18n/dictionaries';
import { telegramUrl } from '@/content/site';

/* Кнопка связи, закреплённая снизу на телефоне: с любого экрана — один тап до диалога. */
export function MobileBar({ t }: { t: Dict }) {
  return (
    <div className="mbar">
      <a
        className="btn btn--accent mbar__btn btn--arrow"
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.common.telegram}
      </a>
    </div>
  );
}
