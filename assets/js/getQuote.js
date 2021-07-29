var inspitableURL = "https://type.fit/api/quotes";
var quote = $("#quote");
var quotesAuthor = $("#quote-author");
function getQuote() {
  fetch(inspitableURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomArr = Math.floor(Math.random() * data.length);
      quote.text(`"${data[randomArr].text}"`);
      if (data[randomArr].author === null) {
        quotesAuthor.text("");
      } else {
        quotesAuthor.text(`"${data[randomArr].author}"`);
        // console.log(data);
        // console.log(randomArr);
      }
    });
}

getQuote();
setTime();

var seconds = 8;
function setTime() {
  var timerInterval = setInterval(function () {
    seconds--;
    // console.log(seconds);

    if (seconds === 0) {
      clearInterval(timerInterval);
      seconds = 8;
      getQuote();
      setTime();
    }
  }, 1000);
}
