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

// let button = document.querySelector('.send')
let questionNum = 0;
const questions = [
  { 'Какой возрастной группы участники?': ['Дети', 'Подростки', 'Взрослые'] },
  { 'Какая тематика квеста интересна?': ['Актеры', 'Атмосферный', 'Веселый', 'Дешевый', 'Интеллектуальный', 
  'Мистический', 'На английском', 'Новый', 'Простой', 'Семейный', 'Сложный', 'Страшный', 
  'Театр', 'Фантастический', 'Экшн', 'Эротический'] },
  { 'Сколько человек?': ['2', 'От 2 до 6', 'Больше 6'] },
  { 'Для Кого?' : ['Для взрослых', 'Для детей', 'Для женщин', 'Для компании', 
  'Для мужчин', 'Для пары', 'Для подростков']},
  { 'Какая сложность квиза?': ['стартовая', 'средняя', 'высокая', 'экспертная'] }
]
let result = {
  age: [],
  genre: [],
  people: [],
  forWho: [],
  difficulty: [],
};
let valueResult = [];
let classResult = [];
function bot() {
  let br = document.createElement('br');
  if (questionNum < questions.length) {
    // let question = document.createTextNode(Object.keys(questions[questionNum])[0]);
    let question = document.createElement('div');
    
    console.log(question);
    question.innerText = Object.keys(questions[questionNum])[0];
    // document.body.appendChild(question);
    chat.appendChild(question);
    let arrValues = Object.values(questions[questionNum])[0].flat();
    document.body.appendChild(br)
    for (let i = 0; i < arrValues.length; i = i + 1) {
      let answer = document.createElement('div');
      answer.className = 'answer';
      let buttonAns = document.createElement('input');
      let brTwo = document.createElement('br');
      buttonAns.type = 'checkbox';
      buttonAns.value = arrValues[i];
      buttonAns.className = Object.keys(result)[questionNum]
      buttonAns.id = arrValues[i]


      answer.appendChild(buttonAns);

      // document.body.appendChild(buttonAns);
      let ansFull = document.createElement('label')
      ansFull.innerText = arrValues[i];
      
      // chat.appendChild(buttonAns);
      answer.appendChild(ansFull)
      answer.appendChild(brTwo)
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
  }
}
// button.addEventListener('click', function () {
//   bot();
//   questionNum++;
// })





form.addEventListener('submit', (e) => {
  // const divFrom = document.createElement('div');
  const chat = document.querySelector(".chat-wrapper");
  const aaClass = ['from' ,'bounceInRight', 'animated'];
  // divFrom.innerHTML = input.value;
  // divFrom.classList.add(...aaClass)
  // chat.appendChild(divFrom)
  // input.value = '';
  chat.scrollTop = chat.scrollHeight;
  bot();
  questionNum++;
})
