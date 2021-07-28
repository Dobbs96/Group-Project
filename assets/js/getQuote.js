var inspitableURL = "https://type.fit/api/quotes";
var quote = $("#quote");
var quotesAuthor = $("#quote-author");

function getQuote() {
  fetch(inspitableURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      quote.text(`"${data[0].text}"`);
      quotesAuthor.text(`"${data[0].author}"`);
    });
}

getQuote();
