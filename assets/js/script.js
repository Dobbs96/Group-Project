// Using JS to get Month, Day, and Year (also time if we need it)
var todayDate = moment().format("MMMM Do YYYY");
$("#date").text(todayDate);

// -----------------James-------------------------

var apiKey = "eb2134244e7565b6b1125ba38666226f";
var cityName = "New York";
var lat = 40.7143;
var lon = -74.006;
var baseURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  // cityName +
  "&lat=" +
  lat +
  "&lon=" +
  lon +
  "&units=imperial&cnt=1&appid=" +
  apiKey;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=imperial&cnt=1&appid=eb2134244e7565b6b1125ba38666226f`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      var iconImg = data.list[0].weather[0].icon;
      var icon = document.getElementById("icon");
      var temperature = Math.floor(data.list[0].main.temp);
      var temp = $("#temp");
      var cityName = data.list[0].name;
      var city = $("#city-name");

      icon.src = `./assets/Images/${iconImg}.png`;
      icon.alt = icon + "icon";
      temp.text(`${temperature}°F`);
      city.text(cityName);
    });
}

function getFetch() {
  fetch(baseURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var iconImg = data.weather[0].icon;
      var icon = document.getElementById("icon");
      var temperature = Math.floor(data.main.temp);
      var temp = $("#temp");
      var cityName = data.name;
      var city = $("#city-name");

      icon.src = `./assets/Images/${iconImg}.png`;
      icon.alt = icon + "icon";
      temp.text(`${temperature}°F`);
      city.text(cityName);
    });
}

navigator.geolocation.getCurrentPosition(success, getFetch, options);

// -----------------James-------------------------

// --------Zana-------------------
const getHobby = [];
getHobby[0] = "Take a breathing class";
getHobby[1] = "Explore Improv";
getHobby[2] = "Cook a new dish";
getHobby[3] = "Learn 5 new words";
getHobby[4] = "Paint one thing you see";
getHobby[6] = "Create a vision-board";
getHobby[7] = "Introduce yourself to two neighbors";
getHobby[8] = "Learn about two new bug species";
getHobby[9] = "Plan a camping trip";
getHobby[10] = "Find a community on Reddit";
getHobby[11] = "Learn a new swim technique";
getHobby[12] = "Learn Photography";
getHobby[13] = "Try Pottery";
getHobby[14] = "Try a sport";
getHobby[15] = "Write a book";
getHobby[16] = "Exercise for 15 minutes";
getHobby[17] = "Write down 5 things you are grateful for";
getHobby[18] = "Do 20 squats";
getHobby[19] = "Do 20 jumping jacks";

var randomHobby = Math.floor(Math.random() * getHobby.length);


document.getElementById("hobby").innerHTML = `Try this: ${getHobby[randomHobby]}`;

