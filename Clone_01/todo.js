const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");



function paintToDo(text){
  const li = document.createElement("li");
  const del = document.createElement("button");
  del.innerHTML = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del);

  toDoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

const TODOS_LS = 'toDos';

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){
    toDoForm.addEventListener("submit", handleSubmit);
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  paintToDo(currentValue);
}

init();
