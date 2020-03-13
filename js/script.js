const button = document.querySelector('.button');
const block = document.querySelector('.container');
const close = document.querySelector('.container__inner_close');
const input = document.querySelector('.inp_text');
const form = document.querySelector('.form');
const chat = document.querySelector('.chat-wrapper');


button.addEventListener('click', (e) => {
  const divTo = document.createElement('div');
  block.classList.toggle('active')
  setTimeout(() => {
    const aaClass = ['to' ,'bounceInLeft', 'animated'];
    divTo.classList.add(...aaClass)
    const objDiv = document.querySelector(".chat-wrapper");
    objDiv.scrollTop = objDiv.scrollHeight;
    // bot();
    divTo.innerHTML = 'Здравствуйте! Я бот поддержки сайта iLocked. Могу вам составить компанию, хотите поговорить?';
    chat.appendChild(divTo)
  }, 2000);
});

close.addEventListener('click', (e) => {
  block.classList.remove('active')
})

let questionNum = 0;
const questions = [
  { 'Здравствуйте! Играли ли вы у нас?': ['Да', 'Нет'], 'type':'oneOption' },
  { 'Какой возрастной группы участники?': ['Дети', 'Подростки', 'Взрослые'], 'type':'oneOption' },
  { 'Какая сложность квиза?': ['Легкий', 'Средний', 'Сложный'], 'type':'oneOption' },
  { 'Какая тематика квеста интересна?': ['Фантастика', 'Приключения', 'Тюремный', 'Страшный'], 'type':'select' }
]
let result = []
function bot() {
  let question = document.createTextNode(Object.keys(questions[questionNum])[0]);
  const divTo = document.createElement('div');
  divTo.innerHTML = question;
  const aaClass = ['to' ,'bounceInLeft', 'animated'];
  divTo.classList.add(...aaClass)
  chat.appendChild(divTo);


  // document.body.appendChild(question);
  let arrValues = Object.values(questions[questionNum])[0].flat();
  for (let i = 0; i < arrValues.length; i = i + 1) {
    let buttonAns = document.createElement('input');
    let ansFull = document.createElement('label')
    buttonAns.type = 'checkbox';
    buttonAns.value=arrValues[i];
    ansFull.innerText = arrValues[i];


    chat.appendChild(buttonAns);
    chat.appendChild(ansFull)
    
    // document.body.appendChild(buttonAns);
    // document.body.appendChild(ansFull)
  }

}

form.addEventListener('submit', (e) => {
  const divFrom = document.createElement('div');
  const objDiv = document.querySelector(".chat-wrapper");
  const aaClass = ['from' ,'bounceInRight', 'animated'];
  divFrom.innerHTML = input.value;
  divFrom.classList.add(...aaClass)
  chat.appendChild(divFrom)
  input.value = '';
  objDiv.scrollTop = objDiv.scrollHeight;
  // bot();
  // questionNum++;
})
