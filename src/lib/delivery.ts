// Условия доставки – со страницы /delivery и корзины живого tsvetibezpovoda.ru (27.10.2026).
export const FREE_FROM = 4000;
/** Минимальная стоимость доставки по Курску; точную сумму по району называет менеджер. */
export const DELIVERY_FROM = 250;
export const HOURS = 'Доставка ежедневно с 10:00 до 00:00';

/** Стоимость доставки: 0 – бесплатно, null – рассчитает менеджер по району. */
export function deliveryPrice(subtotal: number, pickup: boolean): number | null {
  if (pickup) return 0;
  return subtotal >= FREE_FROM ? 0 : null;
}

/** Интервалы доставки – как в корзине донора, по часу с 10:00 до 00:00. */
export const SLOTS = Array.from({ length: 14 }, (_, i) => {
  const h = 10 + i;
  return `${h}:00–${String((h + 1) % 24).padStart(2, '0')}:00`;
});
