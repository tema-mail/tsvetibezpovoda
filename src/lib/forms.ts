// Отправка форм в приёмник Тильды – те же получатели (formservices), что в корзине живого tsvetibezpovoda.ru,
// поэтому заказы приходят туда же, куда сейчас. Сняты с главной донора 27.10.2026.
export const FORM_ACTION = 'https://forms.tildacdn.com/procces/';
export const FORM_SERVICES = [
  '5522f1658a6ad270f3032a81eb75a717',
  'acbf564f70d624f3df845e34ea950b91',
];
export const TILDA = { projectId: '12504825', pageId: '64910143', formsKey: 'fea9d6cebdc70108f340bd1112504825' };

/**
 * Шлёт поля формы. Приёмник Тильды не отдаёт CORS-заголовки, поэтому запрос no-cors:
 * ответ не читается, успехом считаем то, что запрос ушёл без сетевой ошибки.
 */
export async function sendForm(formName: string, fields: Record<string, string>): Promise<boolean> {
  const body = new URLSearchParams();
  FORM_SERVICES.forEach((s) => body.append('formservices[]', s));
  body.append('tildaspec-formname', formName);
  body.append('tildaspec-projectid', TILDA.projectId);
  body.append('tildaspec-pageid', TILDA.pageId);
  body.append('tildaspec-formskey', TILDA.formsKey);
  body.append('tildaspec-referer', location.href);
  for (const [k, v] of Object.entries(fields)) if (v) body.append(k, v);
  try {
    await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body });
    return true;
  } catch {
    return false;
  }
}

import { u } from './url';
/** Адрес «Спасибо» с учётом подпапки на Pages. */
export const thanksUrl = () => u('/thanks');
