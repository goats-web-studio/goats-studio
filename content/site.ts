/* Данные, не зависящие от языка: ссылки, картинки, стек, цифры.
   Тексты к ним лежат в i18n/locales/*.ts и связаны по ключу id. */

export const site = {
  url: 'https://goats-studio.vercel.app',
  telegram: 'Ram_1465',
} as const;

export const telegramUrl = `https://t.me/${site.telegram}`;

export type CaseId =
  | 'triathlon'
  | 'carte'
  | 'nutrient'
  | 'aquagym'
  | 'gep'
  | 'smartziyatker';

export type CaseItem = {
  id: CaseId;
  href: string;
  /** Домен в адресной строке мокапа. Для стора — null, показываем телефон. */
  domain: string | null;
  shot: string;
  stack: string;
  featured?: boolean;
  /** Зеркальная раскладка для второго крупного кейса. */
  reversed?: boolean;
  phone?: boolean;
  /** Картинка уже содержит рамку устройства — показываем без нашего мокапа. */
  promo?: boolean;
  /** Число для анимации счётчика, если результат — цифра. */
  count?: number;
};

export const cases: CaseItem[] = [
  {
    id: 'triathlon',
    href: 'https://www.mangystau-triathlon.kz',
    domain: 'mangystau-triathlon.kz',
    shot: '/cases/triathlon.jpg',
    stack: 'Next.js · Supabase · Tailwind · Vercel',
    featured: true,
    count: 70,
  },
  {
    id: 'carte',
    href: 'https://apps.apple.com/kz/app/carte-qr-%D0%BC%D0%B5%D0%BD%D1%8E/id6783817848',
    domain: null,
    /* Официальный промо-кадр из App Store: рамка телефона уже внутри картинки. */
    shot: '/cases/carte.jpg',
    stack: 'Flutter · Golang',
    phone: true,
    promo: true,
  },
  {
    id: 'nutrient',
    href: 'https://nutrient.10k.kz/login',
    domain: 'nutrient.10k.kz',
    /* Скриншота нет намеренно: сайт отдаётся с просроченным сертификатом
       и брендирован «Joozlet», а за логином ничего публичного нет.
       Пока файла нет — показывается CSS-макет. */
    shot: '/cases/nutrient.jpg',
    stack: 'Vue 3 · PHP · AI',
  },
  {
    id: 'aquagym',
    href: 'https://www.aqua-gym.kz',
    domain: 'aqua-gym.kz',
    shot: '/cases/aquagym.jpg',
    stack: 'Next.js · Tailwind · Vercel · SEO',
    featured: true,
    reversed: true,
  },
  {
    id: 'gep',
    href: 'https://globalexportpartners.kz/',
    domain: 'globalexportpartners.kz',
    shot: '/cases/gep.jpg',
    stack: 'Vue 3 · Node.js',
  },
  {
    id: 'smartziyatker',
    href: 'https://smartziyatker.kz/',
    domain: 'smartziyatker.kz',
    shot: '/cases/smartziyatker.jpg',
    stack: 'React · Python',
  },
];

export const stack = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Node.js',
  'Python', 'PHP', 'Golang', 'Flutter', 'Supabase', 'PostgreSQL',
  'Telegram API', 'AI / LLM',
];

export type PackageId = 'landing' | 'catalog' | 'product';

/* TODO: цены — заглушки. Подставьте свои перед показом клиенту. */
export const packages: { id: PackageId; price: number; featured?: boolean }[] = [
  { id: 'landing', price: 350_000 },
  { id: 'catalog', price: 600_000, featured: true },
  { id: 'product', price: 1_500_000 },
];

export const formatPrice = (value: number, locale: string) =>
  new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'ru-RU').format(value);
