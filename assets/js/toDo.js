var todoForm = document.querySelector("#skills-form");
var nameInput = document.querySelector("#toDo");
var todoListE1 = document.querySelector("#toDoList");

var todos = [];

function init() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  if (storedTodos !== null) {
    todos = storedTodos;
  }

  renderTodos();
}

function renderTodos() {
  todoListE1.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var listEl = document.createElement("li");
    listEl.textContent = todo;
    listEl.setAttribute("data-index", i);
    listEl.setAttribute("class", "list-group-item");

    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "delete is-large");
    removeBtn.setAttribute("type", "button");

    listEl.appendChild(removeBtn);
    todoListE1.appendChild(listEl);
  }
}

todoForm.addEventListener("click", function (event) {
  event.preventDefault();

  var todoText = nameInput.value.trim();

  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  nameInput.value = "";

  storeTodos();
  renderTodos();
});

todoListE1.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

init();

// Autocomplete widget
$(function () {
  var ListItems = [
    "Read",
    "Take a walk",
    "Listen to music",
    "Take a break",
    "Yoga",
    "Play",
    "Eat",
    "Read a book",
    "Take a shower",
    "Stand out under the sun",
  ];
  $("#toDo").autocomplete({
    source: ListItems,
  });
});
