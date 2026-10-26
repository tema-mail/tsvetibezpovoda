// 301 «старый адрес донора → новый» для переезда домена (nginx читает этот файл при выводе в бой).
import type { APIRoute } from 'astro';
import { products } from '../lib/catalog';
import { CATALOGS } from '../lib/site';

export const GET: APIRoute = () => {
  const map: Record<string, string> = { '/catalog': '/catalog', '/contacts': '/contacts', '/delivery': '/delivery', '/rekvizity': '/rekvizity', '/privacy': '/privacy' };
  for (const c of CATALOGS) map[c.old] = `/catalog/${c.slug}`;
  for (const p of products) if (p.old && p.price && p.images.length) map[p.old] = p.path;
  // Страницы поводов на стадии 1 не делаем – ведут в общий каталог.
  for (const o of ['/1september', '/mom', '/love', '/march', '/wedding']) map[o] = '/catalog';
  return new Response(JSON.stringify(map, null, 1), { headers: { 'Content-Type': 'application/json' } });
};
