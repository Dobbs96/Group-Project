var inspitableURL = "https://type.fit/api/quotes";

function getQuote() {
  fetch(inspitableURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getQuote();
