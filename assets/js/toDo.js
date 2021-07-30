var toDoListItems = $("#skills-form");
var nameInput = $("#toDo");
var toDoListEl = $("#toDoList");

var printSkills = function (nameInput) {
  var listDetail = nameInput.val();
  var listEl = $("<li>");
  var removeBtn = $("<button>");
  var checkListBtn = $("<input>");
  // var targetLi = $(".list-group-item") 

  // build
  listEl.addClass("list-group-item").text(listDetail);
  removeBtn.addClass("delete is-large");
  checkListBtn.addClass("check-list")
  checkListBtn.attr('type', 'checkbox') 

  
  // place
  listEl.appendTo(toDoListEl);
  removeBtn.appendTo(listEl);
  checkListBtn.prependTo(listEl);


  checkListBtn.on('click', function(event) {
    event.stopPropagation();
    console.log(event.target)
  })
};

// remove btn event listner


var handleFormSubmit = function (event) {
  event.preventDefault();

  var input = nameInput.val();

  if (!input) {
    console.log("You need to fill out the form!");
    return;
  }

  printSkills(nameInput);

  nameInput.val("");
};

toDoListItems.on("submit", handleFormSubmit);

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

nameInput.keyup(function (event) {
  var code = event.which;
  if (code == 13) {
    event.preventDefault();
  }
});

