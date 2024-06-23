const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";

  const response = await fetch(url);

  const allQuotes = await response.json();

  console.log(allQuotes);

  const indx = Math.floor(Math.random() * allQuotes.length);

  const quote = allQuotes[indx].text;
  const person = allQuotes[indx].author;

  if (person == "null") {
    author = "Anonymous";
  }

  const text = document.getElementById("quote");
  const quoter = document.getElementById("person");
  const tweetButton = document.getElementById("tweet");

  text.innerHTML = quote;
  quoter.innerHTML = "~ " + person;

  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
};

getNewQuote();
