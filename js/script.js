const button = document.querySelector('.button');
const block = document.querySelector('.container');
const close = document.querySelector('.container__inner_close');
const input = document.querySelector('.inp_text');
const form = document.querySelector('.form');
const chat = document.querySelector('.chat-wrapper');
const divFrom = document.createElement('div');



button.addEventListener('click', (e) => {
  const divTo = document.createElement('div');
  block.classList.toggle('active')
  setTimeout(() => {
    const aaClass = ['to' ,'bounceInLeft', 'animated'];
    divTo.classList.add(...aaClass)
    const objDiv = document.querySelector(".chat-wrapper");
    objDiv.scrollTop = objDiv.scrollHeight;
    divTo.innerHTML = 'Здравствуйте! Я бот поддержки сайта iLocked. Могу вам составить компанию, хотите поговорить?';
    chat.appendChild(divTo)
  }, 1000);
});

close.addEventListener('click', (e) => {
  block.classList.remove('active')
})





const questArray = [
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6"], people: ["3", "5", "6"], tagsGenre: ["С актерами", "Театр", "Фантастический"], tagsWho: ["Для детей", "Для компании"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Как приручить драконов", url: "https://ilocked.ru/quest/kak-priruchit-drakonov", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "750", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: [], name: "Головоломка*", url: "https://ilocked.ru/quest/golovolomka", type: "quest", difficulty: "стартовая", category: "приключения", minimalPrice: "750", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["16", "18"], people: ["2", "6"], tagsGenre: ["С актерами", "Атмосферный", "Дешевый", "Мистический", "Семейный", "Сложный", "Страшный", "Театр", "Фантастический"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Маяковская", "Центральный"], name: "Театр Минотавра", url: "https://ilocked.ru/quest/teatr-minotavra", type: "theatre", difficulty: "средняя", category: "театр", minimalPrice: "750", metro: "Маяковская", address: "Дмитровский, 3-5" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14", "16"], people: ["1", "5"], tagsGenre: ["Атмосферный", "Новый", "Фантастический"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Место Преступления", url: "https://ilocked.ru/quest/mesto-prestupleniya", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "450", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14", "16"], people: ["1", "2"], tagsGenre: ["С актерами", "Атмосферный", "Веселый", "Страшный"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Безумие Алисы", url: "https://ilocked.ru/quest/bezumie-alisy", type: "quest", difficulty: "средняя", category: "страшные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6"], people: ["3"], tagsGenre: ["Новый", "Простой", "Семейный"], tagsWho: ["Для детей", "Для компании"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "007: Дети шпионов", url: "https://ilocked.ru/quest/007-deti-shpionov", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "450", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8"], people: ["1", "2", "3", "5"], tagsGenre: ["Атмосферный", "Мистический", "Простой", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Очень странные дела", url: "https://ilocked.ru/quest/ochen-strannye-dela", type: "quest", difficulty: "стартовая", category: "приключения", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8"], people: ["1"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Сложный"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект"], name: "Последняя тайна да Винчи", url: "https://ilocked.ru/quest/poslednyaya-tayna-da-vinchi", type: "quest", difficulty: "высокая", category: "семейные", minimalPrice: "400", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "На английском", "Семейный"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Мумия", url: "https://ilocked.ru/quest/mumiya", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1", "3"], tagsGenre: ["С актерами", "Простой", "Семейный"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Алиса в Стране Чудес", url: "https://ilocked.ru/quest/alisa-v-strane-chudes", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["1"], tagsGenre: ["Атмосферный", "Семейный", "Фантастический"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Мстители: темные времена", url: "https://ilocked.ru/quest/mstiteli", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8", "14"], people: ["1", "4"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный"], tagsWho: ["Для детей", "Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Иллюзия обмана", url: "https://ilocked.ru/quest/illyuziya-obmana-0", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14", "18"], people: ["1", "3"], tagsGenre: ["С актерами", "Атмосферный", "Простой", "Семейный", "Фантастический", "Экшн"], tagsWho: ["Для детей", "Для подростков"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Динозавры: Парк Юрского Периода", url: "https://ilocked.ru/quest/dinozavry-park-yurskogo-perioda", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14", "18"], people: ["1", "3"], tagsGenre: ["С актерами", "Атмосферный", "Простой", "Семейный", "Фантастический", "Экшн"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Звездные воины", url: "https://ilocked.ru/quest/zvezdnye-voiny", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "На английском", "Семейный", "Сложный"], tagsWho: ["Для детей", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Морской бой", url: "https://ilocked.ru/quest/morskoy-boy", type: "quest", difficulty: "высокая", category: "семейные", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: [], name: "Время Приключений*", url: "https://ilocked.ru/quest/vremya-priklyucheniy", type: "quest", difficulty: "стартовая", category: "", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8"], people: ["5"], tagsGenre: [""], tagsWho: [""], tagsGeo: [""], name: "Битва Роботов", url: "https://ilocked.ru/quest/bitva-robotov", type: "quest", difficulty: "стартовая", category: "", minimalPrice: "450", metro: "Новочеркасская", address: "Стахановцев, 21" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6"], people: ["3", "6"], tagsGenre: ["С актерами", "Атмосферный", "Мистический", "Семейный", "Театр", "Фантастический"], tagsWho: ["Для детей", "Для компании"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Охотники за привидениями", url: "https://ilocked.ru/quest/ohotniki-za-privideniyami", type: "theatre", difficulty: "стартовая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Для взрослых (от 18)"], minimalAge: ["18"], people: ["6"], tagsGenre: ["С актерами", "Атмосферный", "Театр", "Эротический"], tagsWho: ["Для взрослых", "Для женщин", "Для компании", "Для мужчин", "Для пары"], tagsGeo: ["Гостиный двор", "Маяковская", "Невский проспект", "Центральный"], name: "96 оттенков серого  (18+)", url: "https://ilocked.ru/quest/96-ottenkov-serogo-18", type: "theatre", difficulty: "стартовая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["1"], tagsGenre: ["С актерами", "Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Сложный", "Фантастический", "Экшн"], tagsWho: ["Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: [], name: "Ван Хельсинг", url: "https://ilocked.ru/quest/van-helsing", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Сенная площадь", address: "Казначейская, 7" },
  { ageGroup: ["Для взрослых (от 18)"], minimalAge: ["18"], people: ["4", "6"], tagsGenre: ["С актерами", "Веселый", "На английском", "Театр", "Эротический"], tagsWho: ["Для взрослых", "Для компании", "Для мужчин", "Для пары"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Квартал красных фонарей (18+)", url: "https://ilocked.ru/quest/kvartal-krasnyh-fonarey-18", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "750", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["2"], tagsGenre: ["Атмосферный", "Семейный", "Сложный", "Страшный", "Фантастический"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Маяковская", "Центральный"], name: "Логово Минотавра", url: "https://ilocked.ru/quest/logovo-minotavra", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "450", metro: "Маяковская", address: "Дмитровский, 3-5" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["5"], people: ["3"], tagsGenre: ["Атмосферный", "Простой", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Супергерои. Новое поколение", url: "https://ilocked.ru/quest/supergeroi-novoe-pokolenie-0", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["1", "2"], tagsGenre: ["Дешевый"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Цирк дю Сатан", url: "https://ilocked.ru/quest/cirk-dyu-satan", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Сложный", "Фантастический", "Экшн"], tagsWho: ["Для детей", "Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Игры Престолов", url: "https://ilocked.ru/quest/igry-prestolov-1", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "500", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Семейный"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Чужой", url: "https://ilocked.ru/quest/chuzhoy", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["16"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "На английском", "Семейный", "Сложный"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Миссия невыполнима", url: "https://ilocked.ru/quest/missiya-nevypolnima", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "450", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["7", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный"], tagsWho: ["Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Индиана Джонс и затерянный храм", url: "https://ilocked.ru/quest/indiana-dzhons-i-zateryannyy-hram", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "450", metro: "Сенная площадь", address: "Казначейская, 7" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14", "16", "18"], people: ["2"], tagsGenre: ["Атмосферный", "Мистический", "Сложный", "Страшный"], tagsWho: ["Для взрослых", "Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Маяковская", "Центральный", "Чернышевская"], name: "Сайлент Хилл", url: "https://ilocked.ru/quest/silent-hill", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "На английском", "Семейный"], tagsWho: ["Для детей", "Для женщин", "Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Центральный"], name: "Бессознательное", url: "https://ilocked.ru/quest/bessoznatelnoe", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14", "16", "18"], people: ["2", "4", "6"], tagsGenre: ["С актерами", "Атмосферный", "Новый", "Семейный", "Сложный", "Страшный", "Театр", "Фантастический"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Потрошитель", url: "https://ilocked.ru/quest/potroshitel", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["2"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Сложный", "Страшный"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Пила", url: "https://ilocked.ru/quest/pila", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8", "14"], people: ["1", "3", "4", "5"], tagsGenre: ["Атмосферный", "Новый", "Семейный", "Сложный", "Экшн"], tagsWho: ["Для детей", "Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Красногвардейский"], name: "Алькатрас", url: "https://ilocked.ru/quest/alkatras", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "500", metro: "Новочеркасская", address: "Стахановцев, 21" },
  { ageGroup: ["Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["14"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Сложный", "Фантастический"], tagsWho: ["Для женщин", "Для компании", "Для мужчин", "Для подростков"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Атлантида: Космическая Одиссея", url: "https://ilocked.ru/quest/atlantida-kosmicheskaya-odisseya-0", type: "quest", difficulty: "экспертная", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Гарри и последний крестраж", url: "https://ilocked.ru/quest/garri-i-posledniy-krestrazh", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["8", "14"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Семейный", "Сложный"], tagsWho: ["Для компании", "Для подростков"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Код да Винчи", url: "https://ilocked.ru/quest/kod-da-vinchi", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"], minimalAge: ["6", "14"], people: ["1"], tagsGenre: ["Атмосферный", "Семейный", "Фантастический"], tagsWho: ["Для детей", "Для компании", "Для подростков"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Хоббит: путешествие в Средиземье", url: "https://ilocked.ru/quest/hobbit-puteshestvie-v-sredizeme", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "450", metro: "Маяковская", address: "Дмитровский, 3-5" },
];

function checker(arr, answers) {
  const newArr = arr.filter((obj) => (
    answers.age.some((item) => obj.ageGroup.includes(item))) &&
    answers.genre.some((item) => obj.tagsGenre.includes(item)) &&
    answers.people.some((item) => obj.people.includes(item)) &&
    answers.difficulty.some((item) => obj.difficulty.includes(item))
  );
  return newArr.map(elem => [elem.name, elem.url])
}

const questions = [
  { "Для кого квест?": ["Для детей (до 14)", "Для подростков (14-18)", "Для взрослых (от 18)"] },
  { "Сколько вас будет человек? (Если в вашей компании больше 6 человек - советуем разделиться на группы)": ["1", "2", "3", "4", "5", "6"] },
  { "Выберите жанр квеста?": ["Веселый", "Интеллектуальный", "Мистический", "На английском", "С актерами", "Страшный", "Театр", "Фантастический", "Экшн", "Эротический"] },
  { "Какая сложность квиза?": ["стартовая", "средняя", "высокая", "экспертная"] },
];

const result = {
  age: [], people: [], genre: [], difficulty: [],
};
let questionNum = 0;
let valueResult = [];
let classResult = [];


function bot() {
  // let br = document.createElement('br');
  if (questionNum < questions.length) {
    // let question = document.createTextNode(Object.keys(questions[questionNum])[0]);
    let question = document.createElement('div');
    
    // console.log(question);
    question.innerText = Object.keys(questions[questionNum])[0];
    // document.body.appendChild(question);
    chat.appendChild(question);
    let arrValues = Object.values(questions[questionNum])[0].flat();
    // document.body.appendChild(br)
    for (let i = 0; i < arrValues.length; i = i + 1) {
      let answer = document.createElement('div');
      answer.className = 'answer';
      let buttonAns = document.createElement('input');
      // let brTwo = document.createElement('br');
      buttonAns.type = 'checkbox';
      buttonAns.value = arrValues[i];
      buttonAns.className = Object.keys(result)[questionNum]
      buttonAns.id = arrValues[i]


      
      // document.body.appendChild(buttonAns);
      let ansFull = document.createElement('label')
      ansFull.innerText = arrValues[i];
      
      // chat.appendChild(buttonAns);
      ansFull.appendChild(buttonAns);
      answer.appendChild(ansFull)
      // answer.appendChild(brTwo)
      chat.appendChild(answer)


      // divFrom.innerHTML = input.value;

      const aaClass = ['to' ,'bounceInLeft', 'animated'];
      question.classList.add(...aaClass)

      const addClass = ['from' ,'bounceInRight', 'animated'];
      // divFrom.innerHTML = input.value;
      answer.classList.add(...addClass)
      // ansFull.classList.add(...addClass)



      // document.body.appendChild(buttonAns);
      // document.body.appendChild(ansFull)
      // document.body.appendChild(brTwo)
    }
  } else {
    let checkedList = document.querySelectorAll('input[type="checkbox"]:checked');
    let helpVar = []
    for (let i = 0; i < checkedList.length; i = i + 1) {
      valueResult.push(checkedList[i].value)
      classResult.push(checkedList[i].className)
      helpVar.push([classResult[i], valueResult[i]])
    }
    let finalVar = helpVar.reduce((acc, el) => {
      return {
        ...acc,
        [el[0]]: acc[el[0]] ? [...acc[el[0]], el[1]] : [el[1]]
      }
    }, {})

    const resultat = checker(questArray, finalVar);
    let result = document.createElement('div');
    const resClass = ['to' ,'bounceInLeft', 'animated'];
    result.classList.add(...resClass)
    result.innerHTML = `На смотри сука, куда ты можешь у нас сходить ${resultat}`;
    chat.appendChild(result)


   
    // console.log(checker(questArray, finalVar));
  }
}


// button.addEventListener('click', function () {
//   bot();
//   questionNum++;
// })


chat.addEventListener('click', function(e) {
  // console.dir(e.target);
  if(e.target.classList.contains('from')) {
    e.target.classList.toggle('blue');
    const checkbox = e.target.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;

  } else if (e.target.parentNode.classList.contains('from')) {
    e.target.parentNode.classList.toggle('blue');
  }
})


form.addEventListener('submit',(e) => {
  // const divFrom = document.createElement('div');
  const chat = document.querySelector(".chat-wrapper");
  const aaClass = ['from' ,'bounceInRight', 'animated'];
  // divFrom.innerHTML = input.value;
  // divFrom.classList.add(...aaClass)
  // chat.appendChild(divFrom)
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
  bot();
  questionNum++;
})


// checkbox.addEventListener('click', () => {
//   checkbox.classList.toggle('blue')
// })
