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

/** Бегущая строка над шапкой – обещания донора дословно (про бонусы на стадии 1 не пишем). */
export const TICKER = [
  'Доставим за 60 минут',
  'В подарок открытка и средство по уходу за букетом к каждому заказу',
  'Бесплатная доставка по Курску от 4 000 ₽',
];

/** Плитки преимуществ под первым экраном – только то, что обещает донор. */
export const FEATURES = [
  'Доставим по Курску за 60 минут',
  'Открытка и средство по уходу за букетом – в подарок',
  'Бесплатная доставка от 4 000 ₽',
  'Ежедневно с 10:00 до 22:00',
];

/** Страницы-каталоги: раздел магазина Тильды (uid) → ЧПУ. Источник – src/data/sections.json (его же читает npm run data). */
export const CATALOGS = sections.map((s) => ({
  ...s,
  crumb: s.title,
  h1: `${s.title} с доставкой по Курску`,
  heading: s.title,
  text: `${s.title} от «Цветы без повода». Доставим по Курску за 60 минут, к каждому заказу – открытка и средство по уходу за букетом.`,
}));

/** Верхнее меню – полный набор эталона Milovini; «Авторские букеты» эталона = «Премиум» донора. */
export const NAV = [
  { label: 'Главная', href: '/' },
  { label: 'Акции', href: '/akcii' },
  { label: 'Корпоративным клиентам', href: '/korporativnym-klientam' },
  { label: 'Доставка', href: '/delivery' },
  { label: 'Каталог цветов', href: '/catalog' },
  { label: 'Премиум', href: '/catalog/premium' },
  { label: 'Отзывы', href: '/#rev' },
  { label: 'Преимущества', href: '/#preim' },
  { label: 'Гарантии', href: '/garantii' },
  { label: 'Контакты', href: '/contacts' },
];

export const FOOTER = {
  menu: [
    { label: 'Главная', href: '/' },
    { label: 'О компании', href: '/o-kompanii' },
    { label: 'Акции', href: '/akcii' },
    { label: 'Корпоративным клиентам', href: '/korporativnym-klientam' },
    { label: 'Каталог цветов', href: '/catalog' },
    { label: 'Отзывы', href: '/#rev' },
    { label: 'Преимущества', href: '/#preim' },
    { label: 'Гарантии', href: '/garantii' },
    { label: 'Доставка и оплата', href: '/delivery' },
    { label: 'Контакты', href: '/contacts' },
  ],
  catalog: [{ label: 'Все букеты', href: '/catalog' }, ...CATALOGS.map((c) => ({ label: c.title, href: `/catalog/${c.slug}` }))],
  buyers: [
    { label: 'Акции', href: '/akcii' },
    { label: 'Доставка и оплата', href: '/delivery' },
    { label: 'Избранное', href: '/favorites' },
    { label: 'Корзина', href: '/order' },
  ],
  info: [
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Пользовательское соглашение', href: '/soglashenie' },
    { label: 'Реквизиты', href: '/rekvizity' },
    { label: 'Карта сайта', href: '/karta-sayta' },
  ],
};

/** Плитки разделов (главная «О компании», «Корпоративным клиентам») – фото первого букета раздела донора. */
export const CATEGORY_TILES = [
  ...CATALOGS.map((c) => ({ title: c.title, href: `/catalog/${c.slug}`, part: c.part })),
  { title: 'Розы', href: '/catalog?part=648946318343', part: '648946318343' },
  { title: 'Хризантемы', href: '/catalog?part=301155593693', part: '301155593693' },
];
