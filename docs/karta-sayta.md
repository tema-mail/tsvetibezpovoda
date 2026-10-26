# Карта сайта – «Цветы без повода», стадия 1 (27.10.2026)

Страниц: главная, общий каталог, 6 разделов, 100 карточек товаров, 5 страниц покупателю, 4 технические. Адреса – ЧПУ, без `tproduct` и id.

## Дерево

| Адрес | Сущность | Что |
|---|---|---|
| `/` | Главная | первый экран, каталог с фильтром, хиты, доставка, контакты |
| `/catalog` | Хаб | все 100 товаров, чипы разделов донора («Все» первым), цена, сортировка |
| `/catalog/monobukety` | Каталог | Монобукеты: 39 товаров в разделе, 39 – с адресом внутри раздела |
| `/catalog/sbornye-bukety` | Каталог | Сборные букеты: 23 товаров в разделе, 23 – с адресом внутри раздела |
| `/catalog/kompozitsii` | Каталог | Композиции: 11 товаров в разделе, 11 – с адресом внутри раздела |
| `/catalog/premium` | Каталог | Премиум: 25 товаров в разделе, 4 – с адресом внутри раздела |
| `/catalog/hity` | Каталог | Хиты: 17 товаров в разделе, 3 – с адресом внутри раздела |
| `/catalog/akcii` | Каталог | Акции: 18 товаров в разделе, 1 – с адресом внутри раздела |
| `/catalog/<раздел>/<товар>` | Карточка товара | 81 шт. |
| `/catalog/<товар>` | Карточка товара | 19 шт. – товары только из разделов-поводов донора |
| `/delivery` | Страница | доставка и оплата (текст донора) |
| `/contacts` | Страница | адрес, телефон, режим, мессенджеры, карта |
| `/rekvizity` | Юридическая | ИП, ИНН, ОГРНИП |
| `/privacy` | Юридическая | политика донора как есть |
| `/karta-sayta` | Техническая | карта сайта деревом |
| `/order`, `/thanks`, `/favorites`, `/404` | Техническая | закрыты от поиска |

Не делаем на стадии 1: ЛК и бонусы; страницы поводов (`/1september`, `/mom`, `/love`, `/march`, `/wedding`) – ведут 301 в `/catalog`.

## 301: старый адрес донора → новый

Полный список собирается сам: `dist/redirects.json` (подключить в nginx при выводе в бой).

| Было | Стало |
|---|---|
| `/mono` | `/catalog/monobukety` |
| `/sbornyye` | `/catalog/sbornye-bukety` |
| `/kompozitsii` | `/catalog/kompozitsii` |
| `/premium` | `/catalog/premium` |
| `/hit` | `/catalog/hity` |
| `/sale` | `/catalog/akcii` |
| `/1september` | `/catalog` |
| `/mom` | `/catalog` |
| `/love` | `/catalog` |
| `/march` | `/catalog` |
| `/wedding` | `/catalog` |
| `/hit/tproduct/102997429263-orehovii-krem` | `/catalog/sbornye-bukety/orekhovyy-krem` |
| `/1september/tproduct/556007564083-rannee-utro` | `/catalog/sbornye-bukety/rannee-utro` |
| `/sale/tproduct/894829180603-rozovii-kompliment` | `/catalog/monobukety/rozovyy-kompliment` |
| `/mono/tproduct/507574232722-letnii-kompliment` | `/catalog/monobukety/letniy-kompliment` |
| `/hit/tproduct/886546673213-belii-kompliment` | `/catalog/monobukety/belyy-kompliment` |
| `/sale/tproduct/206937648083-belaya-klassika` | `/catalog/monobukety/belaya-klassika` |
| `/hit/tproduct/303350651382-romashkovoe-oblako` | `/catalog/hity/romashkovoe-oblako` |
| `/mono/tproduct/318608023542-meri` | `/catalog/monobukety/meri` |
| `/sbornyye/tproduct/923870260703-sladkaya-vata` | `/catalog/sbornye-bukety/sladkaya-vata` |
| `/hit/tproduct/881410450812-klassika` | `/catalog/monobukety/klassika` |
| `/sbornyye/tproduct/394357568422-rozovaya-mechta` | `/catalog/sbornye-bukety/rozovaya-mechta` |
| `/sbornyye/tproduct/712770078982-aprelskoe-utro` | `/catalog/sbornye-bukety/aprelskoe-utro` |
| `/tproduct/314881508172-vesennii-luch` | `/catalog/vesenniy-luch` |
| `/hit/tproduct/372470486342-buket-hrizantem` | `/catalog/monobukety/buket-khrizantem` |
| `/sale/tproduct/986183680592-novella` | `/catalog/monobukety/novella` |
| `/love/tproduct/891689731682-romantika` | `/catalog/monobukety/romantika` |
| `/premium/tproduct/188086999872-pristsilla` | `/catalog/sbornye-bukety/pristsilla` |
| `/tproduct/299992076552-myatnii-briz` | `/catalog/myatnyy-briz` |
| `/premium/tproduct/295195714883-kustovie-rozi-xxl` | `/catalog/monobukety/kustovye-rozy-xxl` |
| `/hit/tproduct/933905787483-rozovii-krem` | `/catalog/sbornye-bukety/rozovyy-krem` |
| `/mono/tproduct/829339784343-farfor` | `/catalog/monobukety/farfor` |
| `/mono/tproduct/518697126493-yarkii-miks-georginov` | `/catalog/monobukety/yarkiy-miks-georginov` |
| `/mono/tproduct/995824477313-medovie-georgini-s` | `/catalog/monobukety/medovye-georginy-s` |
| `/hit/tproduct/491054258453-yarkie-georgini` | `/catalog/monobukety/yarkie-georginy` |
| `/hit/tproduct/474351606983-vozdushnie-georgini` | `/catalog/hity/vozdushnye-georginy` |
| `/sale/tproduct/961004457813-kompliment-iz-diantusov` | `/catalog/monobukety/kompliment-iz-diantusov` |
| `/hit/tproduct/419799642332-korzina-dlya-lyubimoi` | `/catalog/kompozitsii/korzina-dlya-lyubimoy` |
| `/kompozitsii/tproduct/801260596712-konfityur` | `/catalog/kompozitsii/konfityur` |
| `/sbornyye/tproduct/922273675932-lazur` | `/catalog/sbornye-bukety/lazur` |
| `/sbornyye/tproduct/532369593192-rozovoe-shampanskoe` | `/catalog/sbornye-bukety/rozovoe-shampanskoe` |
| `/sbornyye/tproduct/934521774622-shanel` | `/catalog/sbornye-bukety/shanel` |
| `/kompozitsii/tproduct/606761597482-dzhein-eir` | `/catalog/kompozitsii/dzheyn-eyr` |
| `/kompozitsii/tproduct/854769847882-mermaid` | `/catalog/kompozitsii/mermaid` |
| `/kompozitsii/tproduct/980794142352-hrustal` | `/catalog/kompozitsii/khrustal` |
| `/mono/tproduct/737110464762-zhemchuzhnoe-ozherele` | `/catalog/monobukety/zhemchuzhnoe-ozherele` |
| `/mono/tproduct/548893507252-utrennyaya-zvezda` | `/catalog/monobukety/utrennyaya-zvezda` |
| `/mono/tproduct/511489950162-miks-roz-xxl` | `/catalog/monobukety/miks-roz-xxl` |
| `/mono/tproduct/529592254792-kompliment-dlya-nee` | `/catalog/monobukety/kompliment-dlya-nee` |
| `/mono/tproduct/686546347422-plamennie-chuvstva` | `/catalog/monobukety/plamennye-chuvstva` |
| `/mono/tproduct/516948233162-51-roza` | `/catalog/monobukety/51-roza` |
| `/mono/tproduct/264129819722-dlya-lyubimoi` | `/catalog/monobukety/dlya-lyubimoy` |
| `/sbornyye/tproduct/652419383292-pilnaya-roza` | `/catalog/sbornye-bukety/pylnaya-roza` |
| `/tproduct/239294898122-briz` | `/catalog/briz` |
| `/sbornyye/tproduct/198102871082-iskra-lyubvi` | `/catalog/sbornye-bukety/iskra-lyubvi` |
| `/mono/tproduct/314704468122-mono-roz` | `/catalog/monobukety/mono-roz` |
| `/mono/tproduct/914007207052-afrodita` | `/catalog/monobukety/afrodita` |
| `/premium/tproduct/774943969492-vanilnii-krem` | `/catalog/premium/vanilnyy-krem` |
| `/premium/tproduct/158161610642-mono-premium` | `/catalog/premium/mono-premium` |
| `/premium/tproduct/847936040592-lyubovnoe-poslanie` | `/catalog/premium/lyubovnoe-poslanie` |
| `/mono/tproduct/438377974462-miks-pionovidnih-roz` | `/catalog/monobukety/miks-pionovidnykh-roz` |
| `/hit` | `/catalog/monobukety/kremovyy-desert` |
| `/premium/tproduct/826532916262-white-flowers` | `/catalog/kompozitsii/white-flowers` |
| `/sbornyye/tproduct/910009919342-belosnezhka` | `/catalog/sbornye-bukety/belosnezhka` |
| `/mono/tproduct/820558583932-dzhuletta` | `/catalog/monobukety/dzhuletta` |
| `/mom/tproduct/834483606572-vdohnovenie` | `/catalog/vdokhnovenie` |
| `/mom/tproduct/269010418502-kruzhevnie-rozi` | `/catalog/kruzhevnye-rozy` |
| `/mom/tproduct/574540334752-rozovii-muss` | `/catalog/rozovyy-muss` |
| `/mom/tproduct/760075372672-malinovoe-sufle` | `/catalog/malinovoe-sufle` |
| `/mom/tproduct/747223341292-persikovoe-sufle` | `/catalog/persikovoe-sufle` |
| `/mom/tproduct/612642582382-krasnaya-svadba` | `/catalog/krasnaya-svadba` |
| `/mom/tproduct/334843961412-pervoe-vpechatlenie` | `/catalog/pervoe-vpechatlenie` |
| `/love/tproduct/774715327482-iskushenie` | `/catalog/hity/iskushenie` |
| `/1september/tproduct/551124407523-frantsiya` | `/catalog/monobukety/frantsiya` |
| `/love/tproduct/275335158912-lyubov-eto` | `/catalog/premium/lyubov-eto` |
| `/love/tproduct/623133066182-vse-nachinaetsya-s-lyubvi` | `/catalog/vse-nachinaetsya-s-lyubvi` |
| `/premium/tproduct/224354491632-mechta` | `/catalog/kompozitsii/mechta` |
| `/love/tproduct/123466815962-ottenki-nezhnosti` | `/catalog/kompozitsii/ottenki-nezhnosti` |
| `/love/tproduct/201722646872-ottenki-lyubvi` | `/catalog/kompozitsii/ottenki-lyubvi` |
| `/love/tproduct/942627381692-mono-buket-iz-alih-roz` | `/catalog/monobukety/mono-buket-iz-alykh-roz` |
| `/sale/tproduct/879140468312-kompliment-s-frantsuzskimi-rozami` | `/catalog/akcii/kompliment-s-frantsuzskimi-rozami` |
| `/sale/tproduct/848807846922-prirodnii-stil` | `/catalog/sbornye-bukety/prirodnyy-stil` |
| `/premium/tproduct/340290572372-ameliya` | `/catalog/monobukety/ameliya` |
| `/sbornyye/tproduct/507487341232-nezhnii-shelk` | `/catalog/sbornye-bukety/nezhnyy-shelk` |
| `/mono/tproduct/727334486062-elizabet` | `/catalog/monobukety/elizabet` |
| `/premium/tproduct/845218516112-premer` | `/catalog/sbornye-bukety/premer` |
| `/mono/tproduct/174817035303-dofaminovoe-mono` | `/catalog/monobukety/dofaminovoe-mono` |
| `/premium/tproduct/373658727213-dofaminovii-buket` | `/catalog/sbornye-bukety/dofaminovyy-buket` |
| `/tproduct/457808191363-buket-romashek` | `/catalog/buket-romashek` |
| `/tproduct/933889868943-polevoi-buket` | `/catalog/polevoy-buket` |
| `/premium/tproduct/230935233113-kustovie-rozi-xxl-pink` | `/catalog/monobukety/kustovye-rozy-xxl-pink` |
| `/hit/tproduct/458213921303-solnechnoe-kruzhevo` | `/catalog/monobukety/solnechnoe-kruzhevo` |
| `/sbornyye/tproduct/977352282193-vesennee-nebo` | `/catalog/sbornye-bukety/vesennee-nebo` |
| `/mono/tproduct/233114175293-medovie-georgini-l` | `/catalog/monobukety/medovye-georginy-l` |
| `/sbornyye/tproduct/570505140973-letnie-podsolnuhi` | `/catalog/sbornye-bukety/letnie-podsolnukhi` |
| `/sbornyye/tproduct/252849753043-kruzhevnaya-nezhnost` | `/catalog/sbornye-bukety/kruzhevnaya-nezhnost` |
| `/sale/tproduct/946569047723-kompliment-v-sumochke` | `/catalog/kompozitsii/kompliment-v-sumochke` |
| `/sbornyye/tproduct/294376114073-krasnie-rozi` | `/catalog/sbornye-bukety/krasnye-rozy` |
| `/sale/tproduct/224122408723-kompliment-s-podsolnuhom` | `/catalog/sbornye-bukety/kompliment-s-podsolnukhom` |
| `/sale/tproduct/751201618953-kompliment-v-sumochke-2` | `/catalog/kompozitsii/kompliment-v-sumochke-2` |
| `/1september/tproduct/607352472953-pervii-zvonok` | `/catalog/pervyy-zvonok` |
| `/1september/tproduct/483559646503-buket-pervoklassnika-2` | `/catalog/buket-pervoklassnika-2` |
| `/1september/tproduct/605566061213-buket-pervoklassnika-1` | `/catalog/buket-pervoklassnika-1` |
| `/1september/tproduct/826528132673-den-znanii` | `/catalog/den-znaniy` |
| `/1september/tproduct/325550732593-buket-ot-klassa` | `/catalog/buket-ot-klassa` |
| `/1september/tproduct/436884938923-kompliment-uchitelyu` | `/catalog/kompliment-uchitelyu` |
| `/sbornyye/tproduct/578719542193-rozovaya-klassika` | `/catalog/sbornye-bukety/rozovaya-klassika` |
| `/mono/tproduct/323096300243-nezhnii-miks-kustovih-roz` | `/catalog/monobukety/nezhnyy-miks-kustovykh-roz` |
| `/mono/tproduct/917872552553-mirabella` | `/catalog/monobukety/mirabella` |
| `/premium/tproduct/870385062833-dzhuliya` | `/catalog/monobukety/dzhuliya` |
| `/sale/tproduct/648478009843-kustovie-rozi` | `/catalog/monobukety/kustovye-rozy` |

## Вопросы владельцу

1. Поводы (1 сентября, маме, любимой, 8 марта, свадьба) – делаем отдельной стадией? Сейчас 19 товаров из них лежат в общем каталоге.
2. Юридический адрес и телефон на странице реквизитов у донора пустые – дадите?
3. Бонусная система и скидки постоянным: как работает (процент, карта, промокод)? Нужна для стадии ЛК.
4. Отзывы: снять с Яндекс-профиля салона на сайт?
5. Заказы сейчас уходят в приёмник Тильды донора – оставить так или свой приёмник (Telegram)? Можно ли отправить один тестовый заказ?
6. Есть ли фото студии/витрины и тексты «о нас» – у донора их нет, первый экран собран из фото букетов.
7. Боевой домен – тот же tsvetibezpovoda.ru (переезд с Тильды) или новый?
