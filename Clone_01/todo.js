const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

function paintToDo(text){
  const li = document.createElement("li");
  const del = document.createElement("button");
  const span = document.createElement("span");
  const newID = toDos.length + 1;

  del.innerHTML = "X";
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(del);
  li.id = newID;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newID
  };

  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

const TODOS_LS = 'toDos';

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);

    })

  }

}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  paintToDo(currentValue);
}

init();
