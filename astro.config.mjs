import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// Адрес сайта для canonical и sitemap. Боевой домен – tsvetibezpovoda.ru (пока на Тильде у донора),
// на время показа – GitHub Pages (PUBLIC_SITE_URL задаёт workflow).
const SITE = process.env.PUBLIC_SITE_URL || 'https://tsvetibezpovoda.ru';
// Подпапка для GitHub Pages (например /tsvetibezpovoda), на своём домене – пусто.
const BASE = process.env.PUBLIC_BASE || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [preact()],
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
