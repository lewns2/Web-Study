const form = document.querySelector(".js-form");
const input = form.querySelector(".input");
const greetings = document.querySelector(".js-greetings");

const USER = "currentUser";
const SHOWING_CN = "showing";

function askForName(){
  form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER);
  if(currentUser === null){
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
}

init();
