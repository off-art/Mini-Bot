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
    divTo.className = 'to';
    divTo.innerHTML = 'Здравствуйте! Я бот поддержки сайта iLocked. Могу вам составить компанию, хотите поговорить?';
    chat.appendChild(divTo)
  }, 2000);
});

close.addEventListener('click', (e) => {
  block.classList.remove('active')
})


form.addEventListener('submit', (e) => {
  const divFrom = document.createElement('div');
  divFrom.innerHTML = input.value;
  divFrom.className = 'from';
  chat.appendChild(divFrom)
  input.value = '';
})

