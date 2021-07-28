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
      quote.text(`"${data[Math.floor(Math.random() * data.length)].text}"`);
      quotesAuthor.text(
        `"${data[Math.floor(Math.random() * data.length)].author}"`
      );
    });
}

getQuote();
