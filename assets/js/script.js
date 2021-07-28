// Using JS to get Month, Day, and Year (also time if we need it)
var todayDate = moment().format("MMMM Do YYYY");
$("#date").text(todayDate);
