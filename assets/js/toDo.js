var toDoListItems = $('#skills-form');
var nameInput = $('#toDo')
var toDoListEl = $('#toDoList');

// function handleFormSubmit(event) {
//     event.preventDefault();
// }

// toDoListItems.on ('click', handleFormSubmit)



var printSkills = function (name) {
    var listEl = $('<li>');
    var listDetail = name;
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(toDoListEl);
  };

  var handleFormSubmit = function (event) {
    event.preventDefault();
  
  var input = nameInput.val();

  if (!input) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput);

  nameInput.val('');
};

toDoListItems.on('submit', handleFormSubmit);



//   var handleFormSubmit = function (event) {
//     event.preventDefault();
  
//     var toDoInput = toDoInputEl.val();
    
  
    // if (!toDoInput) {
    //   console.log('You need to fill out the form!');
    //   return;
    // }
  
    // printSkills(toDoInput);
  
    // toDoInputEl.val('');
  
//   toDoListItems.on('submit', handleFormSubmit);


// Autocomplete widget
$(function () {
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