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
    const aaClass = ['to', 'bounceInLeft', 'animated'];
    divTo.classList.add(...aaClass)
    const objDiv = document.querySelector(".chat-wrapper");
    objDiv.scrollTop = objDiv.scrollHeight;
    divTo.innerHTML = `Здравствуйте! Я бот поддержки сайта iLocked. Нажмите на  <b class='red'>▶</b>`;
    chat.appendChild(divTo)
  }, 1000);
});

close.addEventListener('click', (e) => {
  block.classList.remove('active')
})





const questArray = [
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6"], peopleGroup: ["2-3", "3-6"], people: ["3", "5", "6"], tagsGenre: ["С актерами", "Театр", "Фантастический"], tagsWho: ["Дети", "Для компании"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Как приручить драконов", url: "https://ilocked.ru/quest/kak-priruchit-drakonov", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "750", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2", "2-3"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: [], name: "Головоломка*", url: "https://ilocked.ru/quest/golovolomka", type: "quest", difficulty: "стартовая", category: "приключения", minimalPrice: "750", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["16", "18"], peopleGroup: ["2-3", "3-6"], people: ["2", "6"], tagsGenre: ["С актерами", "Атмосферный", "Дешевый", "Мистический", "Семейный", "Сложный", "Страшный", "Театр", "Фантастический"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Маяковская", "Центральный"], name: "Театр Минотавра", url: "https://ilocked.ru/quest/teatr-minotavra", type: "theatre", difficulty: "средняя", category: "театр", minimalPrice: "750", metro: "Маяковская", address: "Дмитровский, 3-5" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14", "16"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "5"], tagsGenre: ["Атмосферный", "Новый", "Фантастический"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Место Преступления", url: "https://ilocked.ru/quest/mesto-prestupleniya", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "450", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14", "16"], peopleGroup: ["1-2"], people: ["1", "2"], tagsGenre: ["С актерами", "Атмосферный", "Веселый", "Страшный"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Безумие Алисы", url: "https://ilocked.ru/quest/bezumie-alisy", type: "quest", difficulty: "средняя", category: "страшные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6"], peopleGroup: ["2-3", "3-6"], people: ["3"], tagsGenre: ["Новый", "Простой", "Семейный"], tagsWho: ["Дети", "Для компании"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "007: Дети шпионов", url: "https://ilocked.ru/quest/007-deti-shpionov", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "450", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "2", "3", "5"], tagsGenre: ["Атмосферный", "Мистический", "Простой", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Очень странные дела", url: "https://ilocked.ru/quest/ochen-strannye-dela", type: "quest", difficulty: "стартовая", category: "приключения", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Сложный"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект"], name: "Последняя тайна да Винчи", url: "https://ilocked.ru/quest/poslednyaya-tayna-da-vinchi", type: "quest", difficulty: "высокая", category: "семейные", minimalPrice: "400", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "На английском", "Семейный"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Мумия", url: "https://ilocked.ru/quest/mumiya", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["С актерами", "Простой", "Семейный"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Алиса в Стране Чудес", url: "https://ilocked.ru/quest/alisa-v-strane-chudes", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Семейный", "Фантастический"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Мстители: темные времена", url: "https://ilocked.ru/quest/mstiteli", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8", "14"], peopleGroup: ["1-2", "3-6"], people: ["1", "4"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный"], tagsWho: ["Дети", "Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Иллюзия обмана", url: "https://ilocked.ru/quest/illyuziya-obmana-0", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14", "18"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["С актерами", "Атмосферный", "Простой", "Семейный", "Фантастический", "Экшн"], tagsWho: ["Дети", "Подростки"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Динозавры: Парк Юрского Периода", url: "https://ilocked.ru/quest/dinozavry-park-yurskogo-perioda", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14", "18"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["С актерами", "Атмосферный", "Простой", "Семейный", "Фантастический", "Экшн"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Звездные воины", url: "https://ilocked.ru/quest/zvezdnye-voiny", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "На английском", "Семейный", "Сложный"], tagsWho: ["Дети", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Морской бой", url: "https://ilocked.ru/quest/morskoy-boy", type: "quest", difficulty: "высокая", category: "семейные", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: [], name: "Время Приключений*", url: "https://ilocked.ru/quest/vremya-priklyucheniy", type: "quest", difficulty: "стартовая", category: "", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8"], peopleGroup: ["3-6"], people: ["5"], tagsGenre: [""], tagsWho: [""], tagsGeo: [""], name: "Битва Роботов", url: "https://ilocked.ru/quest/bitva-robotov", type: "quest", difficulty: "стартовая", category: "", minimalPrice: "450", metro: "Новочеркасская", address: "Стахановцев, 21" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6"], peopleGroup: ["2-3", "3-6"], people: ["3", "6"], tagsGenre: ["С актерами", "Атмосферный", "Мистический", "Семейный", "Театр", "Фантастический"], tagsWho: ["Дети", "Для компании"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Охотники за привидениями", url: "https://ilocked.ru/quest/ohotniki-za-privideniyami", type: "theatre", difficulty: "стартовая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Взрослые (от 18)"], minimalAge: ["18"], peopleGroup: ["3-6"], people: ["6"], tagsGenre: ["С актерами", "Атмосферный", "Театр", "Эротический"], tagsWho: ["Взрослые", "Для женщин", "Для компании", "Для мужчин", "Для пары"], tagsGeo: ["Гостиный двор", "Маяковская", "Невский проспект", "Центральный"], name: "96 оттенков серого  (18+)", url: "https://ilocked.ru/quest/96-ottenkov-serogo-18", type: "theatre", difficulty: "стартовая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["С актерами", "Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Сложный", "Фантастический", "Экшн"], tagsWho: ["Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: [], name: "Ван Хельсинг", url: "https://ilocked.ru/quest/van-helsing", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "500", metro: "Сенная площадь", address: "Казначейская, 7" },
  { ageGroup: ["Взрослые (от 18)"], minimalAge: ["18"], peopleGroup: ["2-3", "3-6"], people: ["4", "6"], tagsGenre: ["С актерами", "Веселый", "На английском", "Театр", "Эротический"], tagsWho: ["Взрослые", "Для компании", "Для мужчин", "Для пары"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Квартал красных фонарей (18+)", url: "https://ilocked.ru/quest/kvartal-krasnyh-fonarey-18", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "750", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2", "2-3"], people: ["2"], tagsGenre: ["Атмосферный", "Семейный", "Сложный", "Страшный", "Фантастический"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Маяковская", "Центральный"], name: "Логово Минотавра", url: "https://ilocked.ru/quest/logovo-minotavra", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "450", metro: "Маяковская", address: "Дмитровский, 3-5" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["5"], peopleGroup: ["2-3", "3-6"], people: ["3"], tagsGenre: ["Атмосферный", "Простой", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании"], tagsGeo: ["Гостиный двор", "Маяковская", "Центральный", "Чернышевская"], name: "Супергерои. Новое поколение", url: "https://ilocked.ru/quest/supergeroi-novoe-pokolenie-0", type: "quest", difficulty: "стартовая", category: "семейные", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2", "2-3"], people: ["1", "2"], tagsGenre: ["Дешевый"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Цирк дю Сатан", url: "https://ilocked.ru/quest/cirk-dyu-satan", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Сложный", "Фантастический", "Экшн"], tagsWho: ["Дети", "Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Игры Престолов", url: "https://ilocked.ru/quest/igry-prestolov-1", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "500", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Семейный"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Горьковская", "Петроградский", "Спортивная"], name: "Чужой", url: "https://ilocked.ru/quest/chuzhoy", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "400", metro: "Горьковская", address: "Великан Парк" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["16"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "На английском", "Семейный", "Сложный"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Миссия невыполнима", url: "https://ilocked.ru/quest/missiya-nevypolnima", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "450", metro: "Сенная площадь", address: "Гороховая, 32" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["7", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный"], tagsWho: ["Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Индиана Джонс и затерянный храм", url: "https://ilocked.ru/quest/indiana-dzhons-i-zateryannyy-hram", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "450", metro: "Сенная площадь", address: "Казначейская, 7" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14", "16", "18"], peopleGroup: ["1-2", "2-3"], people: ["2"], tagsGenre: ["Атмосферный", "Мистический", "Сложный", "Страшный"], tagsWho: ["Взрослые", "Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Маяковская", "Центральный", "Чернышевская"], name: "Сайлент Хилл", url: "https://ilocked.ru/quest/silent-hill", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "На английском", "Семейный"], tagsWho: ["Дети", "Для женщин", "Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Центральный"], name: "Бессознательное", url: "https://ilocked.ru/quest/bessoznatelnoe", type: "quest", difficulty: "средняя", category: "приключения", minimalPrice: "400", metro: "Звенигородская", address: "Социалистическая, 10" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14", "16", "18"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["2", "4", "6"], tagsGenre: ["С актерами", "Атмосферный", "Новый", "Семейный", "Сложный", "Страшный", "Театр", "Фантастический"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Адмиралтейский", "Невский проспект", "Центральный"], name: "Потрошитель", url: "https://ilocked.ru/quest/potroshitel", type: "theatre", difficulty: "высокая", category: "театр", minimalPrice: "850", metro: "Невский проспект", address: "Миллионная, 23" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2", "2-3"], people: ["2"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Сложный", "Страшный"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Адмиралтейский", "Садовая", "Сенная", "Спасская"], name: "Пила", url: "https://ilocked.ru/quest/pila", type: "quest", difficulty: "высокая", category: "страшные", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3", "4", "5"], tagsGenre: ["Атмосферный", "Новый", "Семейный", "Сложный", "Экшн"], tagsWho: ["Дети", "Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Красногвардейский"], name: "Алькатрас", url: "https://ilocked.ru/quest/alkatras", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "500", metro: "Новочеркасская", address: "Стахановцев, 21" },
  { ageGroup: ["Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["14"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Новый", "Семейный", "Сложный", "Фантастический"], tagsWho: ["Для женщин", "Для компании", "Для мужчин", "Подростки"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Атлантида: Космическая Одиссея", url: "https://ilocked.ru/quest/atlantida-kosmicheskaya-odisseya-0", type: "quest", difficulty: "экспертная", category: "приключения", minimalPrice: "500", metro: "Чернышевская", address: "Соляной пер.8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Интеллектуальный", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Гарри и последний крестраж", url: "https://ilocked.ru/quest/garri-i-posledniy-krestrazh", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "450", metro: "Чернышевская", address: "Виленский, 8" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["8", "14"], peopleGroup: ["1-2", "2-3", "3-6"], people: ["1", "3"], tagsGenre: ["Атмосферный", "Дешевый", "Интеллектуальный", "Семейный", "Сложный"], tagsWho: ["Для компании", "Подростки"], tagsGeo: ["Владимирская", "Достоевская", "Звенигородская", "Лиговский проспект", "Обводный канал", "Центральный"], name: "Код да Винчи", url: "https://ilocked.ru/quest/kod-da-vinchi", type: "quest", difficulty: "высокая", category: "приключения", minimalPrice: "400", metro: "Лиговский проспект", address: "Коломенская, 42" },
  { ageGroup: ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"], minimalAge: ["6", "14"], peopleGroup: ["1-2"], people: ["1"], tagsGenre: ["Атмосферный", "Семейный", "Фантастический"], tagsWho: ["Дети", "Для компании", "Подростки"], tagsGeo: ["Маяковская", "Площадь Восстания", "Центральный", "Чернышевская"], name: "Хоббит: путешествие в Средиземье", url: "https://ilocked.ru/quest/hobbit-puteshestvie-v-sredizeme", type: "quest", difficulty: "средняя", category: "семейные", minimalPrice: "450", metro: "Маяковская", address: "Дмитровский, 3-5" },
];

function checker(arr, answers) {
  const newArr = arr.filter((obj) => (
    answers.age.some((item) => obj.ageGroup.includes(item))) &&
    answers.genre.some((item) => obj.tagsGenre.includes(item)) &&
    answers.people.some((item) => obj.peopleGroup.includes(item)) &&
    answers.difficulty.some((item) => obj.difficulty.includes(item))
  );
  return newArr.map(elem => [elem.name, elem.url])
}

const questions = [
  { "Для кого квест?": ["Дети (до 14)", "Подростки (14-18)", "Взрослые (от 18)"] },
  { "Сколько вас будет человек? \n \n (если вас будет больше 6 человек - советуем разделиться на группы)": ["1-2", "2-3", "3-6"] },
  { "Выберите жанр квеста?": ["Веселый", "Интеллектуальный", "Мистический", "На английском", "С актерами", "Страшный", "Театр", "Фантастический", "Экшн", "Эротический"] },
  { "Какая сложность квиза?": ["стартовая", "средняя", "высокая"] },
];

const result = {
  age: [],
  people: [],
  genre: [],
  difficulty: [],
};
let questionNum = 0;
let valueResult = [];
let classResult = [];


function bot() {
  if (questionNum < questions.length) {
    let question = document.createElement('div');
    question.innerText = Object.keys(questions[questionNum])[0];
    chat.appendChild(question);
    let arrValues = Object.values(questions[questionNum])[0].flat();

    const answersDiv = document.createElement('div');
    answersDiv.className = 'answersDiv';
    for (let i = 0; i < arrValues.length; i = i + 1) {
      let answer = document.createElement('div');





      answer.className = 'answer';
      let buttonAns = document.createElement('input');
      buttonAns.type = 'checkbox';
      buttonAns.value = arrValues[i];
      buttonAns.className = Object.keys(result)[questionNum]
      buttonAns.id = arrValues[i]
      let ansFull = document.createElement('label')
      ansFull.innerText = arrValues[i];
      ansFull.appendChild(buttonAns);
      answer.appendChild(ansFull)
      answersDiv.appendChild(answer)
      chat.appendChild(answersDiv)

      const aaClass = ['to', 'bounceInLeft', 'animated'];
      question.classList.add(...aaClass)

      const addClass = ['from', 'bounceInRight', 'animated'];
      answer.classList.add(...addClass)
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
    let finalQuestName = resultat.map(quest => quest[0]);
    let finalRefs = resultat.map(quest => quest[1]);
    let resultwithText = document.createElement('div');
    const resClass = ['to', 'bounceInLeft', 'animated'];
    if (resultat.length > 0) {
      resultwithText.innerHTML = `<b> Перейдите по ссылке, чтобы забронировать квест </b>`;
    } else {
      resultwithText.innerHTML = `<b> Мы не смогли подобрать ничего подходящего </b>`;
    }
    resultwithText.classList.add(...resClass)
    chat.appendChild(resultwithText);
    for (let i = 0; i < resultat.length; i++) {
      let result = document.createElement('div');
      let resultRefs = document.createElement('a');
      resultRefs.setAttribute('target', "_blank")
      resultRefs.href = finalRefs[i];
      resultRefs.innerText = finalQuestName[i]
      result.classList.add(...resClass);
      result.classList.add('links')
      result.appendChild(resultRefs);
      chat.appendChild(result);
    }
  }
}



chat.addEventListener('click', function (e) {
  if (e.target.classList.contains('from')) {
    e.target.classList.toggle('blue');
    const checkbox = e.target.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    chat.scrollTop = chat.scrollHeight;

  } else if (e.target.parentNode.classList.contains('from')) {
    e.target.parentNode.classList.toggle('blue');
  }
})


form.addEventListener('submit', (e) => {
  const chat = document.querySelector(".chat-wrapper");
  const checked = chat.querySelectorAll('.answer:not(.blue)');
  checked.forEach(elem=> elem.style.display='none');
  chat.lastElementChild.classList.add('answered');
  // input.value = '';
  
  bot();
  chat.scrollTop = chat.scrollHeight;

  questionNum++;
})
