import { products, inPart, PART } from './catalog';
import { u } from './url';

// Плитки разделов для мобильного меню: фото – первый товар раздела, подразделы – ссылки.
export interface MenuTile { title: string; href: string; img: string; count: number; children: { title: string; href: string }[] }

const byPart = (id: string) => products.filter((p) => inPart(p, id));
const q = (id: string) => u(`/catalog?part=${id}`);

function tile(title: string, href: string, part: string, children: MenuTile['children'] = [], pick = 0): MenuTile {
  const list = byPart(part);
  const p = list[pick] ?? list[0];
  return { title, href: u(href), img: p ? u(p.images[0] + '-480.webp') : '', count: list.length, children };
}

export const menuTiles: MenuTile[] = [
  tile('Сборные букеты', '/catalog/sbornye-bukety', PART.mixed),
  tile('Монобукеты', '/catalog/monobukety', PART.mono),
  tile('Композиции', '/catalog/kompozitsii', PART.compositions),
  tile('Премиум', '/catalog/premium', PART.premium),
  tile('Хиты', '/catalog/hity', PART.hits),
  tile('Акции', '/catalog/akcii', PART.sale),
  tile('Розы', `/catalog?part=${PART.roses}`, PART.roses),
  tile('Хризантемы', `/catalog?part=${PART.chrysanthemums}`, PART.chrysanthemums),
];
