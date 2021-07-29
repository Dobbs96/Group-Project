var toDoListItems = $("#skills-form");
var nameInput = $("#toDo");
var toDoListEl = $("#toDoList");

var printSkills = function (nameInput) {
  var listEl = $("<li>");
  var listDetail = nameInput.val();
  listEl.addClass("list-group-item").text(listDetail);
  listEl.appendTo(toDoListEl);
};

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
<<<<<<< HEAD
    var ListItems = [
      'Read',
      'Take a walk',
      'Listen to music',
      'Take a break',
      'Yoga',
      'Play',
      'Eat',
      'Read a book',
      'Take a shower',
      'Stand out under the sun',
    ];
    $('#toDo').autocomplete({
      source: ListItems,
    });
  });

  nameInput.keyup(function(event){
      var code = event.which;
      if(code == 13) {
          event.preventDefault();
          toDoListEl.append('<li class="list-group-item' +event.target.value+ '</li>')
      } 
  }) 
=======
  var ListItems = [
    "Read",
    "Take a walk",
    "Listen to music",
    "Take a break",
    "Yoga",
    "Play",
    "Eat",
    "Breathe",
    "Read a book",
    "Take a shower",
    "Stand out under the sun",
  ];
  $("#toDo").autocomplete({
    source: ListItems,
  });
});
>>>>>>> main
