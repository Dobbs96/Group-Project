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

// -----------------
