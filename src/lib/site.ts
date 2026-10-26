// Контакты и навигация – одно место для шапки, меню, подвала и страниц. Всё – с tsvetibezpovoda.ru (27.10.2026).
import sections from '../data/sections.json';

export const SITE = {
  name: 'Цветы без повода',
  city: 'Курск',
  address: 'ул. Ленина, 74',
  phone: '+7 (906) 574-57-45',
  phoneHref: 'tel:+79065745745',
  hours: 'Ежедневно, 10:00–22:00',
  owner: 'ИП Логвинова Надежда Игоревна',
  inn: '463245115099',
  ogrnip: '323460000000097',
  yandexOrg: 'https://yandex.ru/profile/137449738710',
};

export const SOCIALS = [
  { id: 'vk', label: 'ВКонтакте', href: 'https://vk.me/bouquet046' },
  { id: 'tg', label: 'Telegram', href: 'https://t.me/bouquet046' },
  { id: 'wa', label: 'WhatsApp', href: 'https://wa.me/79065745745' },
] as const;

/** Бегущая строка над шапкой – обещания донора дословно. */
export const TICKER = [
  'Доставим за 60 минут',
  'Бонусная система и скидки постоянным клиентам',
  'В подарок открытка и средство по уходу за букетом к каждому заказу',
];

/** Плитки преимуществ под первым экраном – только то, что обещает донор. */
export const FEATURES = [
  'Доставим по Курску за 60 минут',
  'Открытка и средство по уходу за букетом – в подарок',
  'Бонусная система и скидки постоянным клиентам',
  'Бесплатная доставка от 4 000 ₽',
];

/** Страницы-каталоги: раздел магазина Тильды (uid) → ЧПУ. Источник – src/data/sections.json (его же читает npm run data). */
export const CATALOGS = sections.map((s) => ({
  ...s,
  crumb: s.title,
  h1: `${s.title} с доставкой по Курску`,
  heading: s.title,
  text: `${s.title} от «Цветы без повода». Доставим по Курску за 60 минут, к каждому заказу – открытка и средство по уходу за букетом.`,
}));

/** Верхнее меню – как на доноре. */
export const NAV = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Акции', href: '/catalog/akcii' },
  { label: 'Хиты', href: '/catalog/hity' },
  { label: 'Премиум', href: '/catalog/premium' },
  { label: 'Доставка и оплата', href: '/delivery' },
  { label: 'Контакты', href: '/contacts' },
];

export const FOOTER = {
  catalog: [{ label: 'Все букеты', href: '/catalog' }, ...CATALOGS.map((c) => ({ label: c.title, href: `/catalog/${c.slug}` }))],
  buyers: [
    { label: 'Доставка и оплата', href: '/delivery' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Избранное', href: '/favorites' },
    { label: 'Корзина', href: '/order' },
  ],
  info: [
    { label: 'Реквизиты', href: '/rekvizity' },
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Карта сайта', href: '/karta-sayta' },
  ],
};
