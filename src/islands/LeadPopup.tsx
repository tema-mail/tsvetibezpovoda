import { useState } from 'preact/hooks';
import { sheet } from '../lib/store';
import { sendForm, thanksUrl } from '../lib/forms';
import { maskPhone, phoneOk } from '../lib/phone';
import { u } from '../lib/url';
import { SITE } from '../lib/site';
import Drawer from './Drawer';
import { IconFlower } from './icons';

// Фото слева в попапе – букет «Раннее утро» из каталога донора.
const ART = '/img/p/stor3065-3461_742911e64b9961f835dc84766f433704-1000.webp';

// Попап «Поможем выбрать букет» – обратный звонок (на доноре эту роль играет тест Marquiz «Подберём идеальный букет»).
// Открывается всеми кнопками «Заказать букет» / «Помогите выбрать» с data-lead.
export default function LeadPopup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: Event) => {
    e.preventDefault();
    if (!phoneOk(phone)) return setErr('Укажите телефон полностью – перезвоним');
    if (!agree) return setErr('Нужно согласие на обработку данных');
    setBusy(true);
    const ok = await sendForm('Помочь с выбором букета', { Name: name, Phone: phone, Agree: 'yes' });
    setBusy(false);
    if (!ok) return setErr(`Не получилось отправить. Позвоните нам: ${SITE.phone}`);
    location.href = thanksUrl();
  };

  return (
    <Drawer open={sheet.value === 'lead'} onClose={() => (sheet.value = null)} side="center" label="Заявка на букет">
      <div class="lead">
        <div class="lead__art" aria-hidden="true" style={{ backgroundImage: `url(${u(ART)})` }} />
        <form class="lead__form" onSubmit={submit} noValidate>
          <button type="button" class="lead__x" aria-label="Закрыть" onClick={() => (sheet.value = null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <h2 class="lead__title">Подберём идеальный букет</h2>
          <p class="lead__text">Оставьте телефон – перезвоним, поможем выбрать букет и оформим заказ. Доставим по Курску за 60 минут.</p>
          <label class="field">
            <span class="field__label">Имя</span>
            <input class="input" name="Name" autoComplete="name" placeholder="Как к вам обращаться" value={name} onInput={(e) => setName((e.target as HTMLInputElement).value)} />
          </label>
          <label class="field">
            <span class="field__label">Телефон</span>
            <input
              class={`input${err && !phoneOk(phone) ? ' is-error' : ''}`} type="tel" name="Phone" autoComplete="tel" inputMode="tel"
              placeholder="+7 (___) ___-__-__" value={phone}
              onInput={(e) => { setPhone(maskPhone((e.target as HTMLInputElement).value)); setErr(''); }}
            />
          </label>
          <label class="check">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree((e.target as HTMLInputElement).checked)} />
            <span>Я согласен на обработку персональных данных согласно <a href={u('/privacy')} target="_blank">политике конфиденциальности</a></span>
          </label>
          {err && <p class="form-err" role="alert">{err}</p>}
          <button class="btn btn--mauve btn--block" type="submit" disabled={busy}>
            {busy ? 'Отправляем…' : <>Жду звонка <IconFlower /></>}
          </button>
        </form>
      </div>
    </Drawer>
  );
}
