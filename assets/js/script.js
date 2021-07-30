// Using JS to get Month, Day, and Year (also time if we need it)
var todayDate = moment().format("MMMM Do YYYY");
$("#date").text(todayDate);

// -----------------James-------------------------

var apiKey = "eb2134244e7565b6b1125ba38666226f";
var cityName = "New York";
var baseURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&units=imperial&cnt=1&appid=" +
  apiKey;

fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// -----------------James-------------------------

// --------Zana-------------------
const getHobby = [];
getHobby[0] = "Take a breathing class";
getHobby[1] = "Explore Improv";
getHobby[2] = "Cook a new dish";
getHobby[3] = "Learn 5 new words";
getHobby[4] = "Paint your outside landscape";
getHobby[6] = "Create a vision-board";
getHobby[7] = "Introduce yourself to two neighbors";
getHobby[8] = "Learn about two new bug species";
getHobby[9] = "Plan a camping trip";
getHobby[10] = "Find a community on Reddit";
getHobby[11] = "Learn a new swim technique";
getHobby[12] = "Write down 5 things you are grateful for";
getHobby[13] = "Do 20 squats";

document.getElementById("hobby").innerHTML = "#hobby";
var randomHobby = Math.floor(Math.random() * getHobby.length);
