// let buttonStart = document.querySelector('.start')
// let button = document.querySelector('.send')
let questionNum = 0;
const questions = [
  { 'Здравствуйте! Играли ли вы у нас?': ['Да', 'Нет'], 'type':'oneOption' },
  { 'Какой возрастной группы участники?': ['Дети', 'Подростки', 'Взрослые'], 'type':'oneOption' },
  { 'Какая сложность квиза?': ['Легкий', 'Средний', 'Сложный'], 'type':'oneOption' },
  { 'Какая тематика квеста интересна?': ['Фантастика', 'Приключения', 'Тюремный', 'Страшный'], 'type':'select' }
]
let result = []
// buttonStart.addEventListener('click', function () {
//   bot();
// })
function bot() {
    let question = document.createTextNode(Object.keys(questions[questionNum])[0]);
    document.body.appendChild(question);
    let arrValues = Object.values(questions[questionNum])[0].flat();
    for (let i = 0; i < arrValues.length; i = i + 1) {
      let buttonAns = document.createElement('input');
      let ansFull = document.createElement('label')
      buttonAns.type = 'checkbox';
      buttonAns.value=arrValues[i];
      ansFull.innerText = arrValues[i];
      document.body.appendChild(buttonAns);
      document.body.appendChild(ansFull)
    
  }

//  let chosen = document.querySelectorAll(('input[type="checkbox"]:checked').nextSibling.value)
//   // console.log(chosen.forEach(elem => elem.nextSibling))
//   console.log(chosen);
  
}
button.addEventListener('click', function () {
  bot();
  questionNum++;
  // console.log(questionNum);
})

