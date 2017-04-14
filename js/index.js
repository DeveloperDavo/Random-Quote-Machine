var randomQuoteGenerator = {
    quotes: [
        {text: "Life is about making an impact, not making an income.", person: "Kevin Kruse"},
        {text: "Whatever the mind of man can conceive and believe, it can achieve.", person: "Napoleon Hill"},
        {text: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein"},
        {text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", person: "Robert Frost"},
        {text: "I attribute my success to this: I never gave or took any excuse.", person: "Florence Nightingale"}
    ],
    generateRandomQuote: function() {
        var index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    }
};

function displayQuote() {
    var element = document.getElementById("quote");
    var quote = randomQuoteGenerator.generateRandomQuote();
    var formattedQuote = quote.text + " - " + quote.person;
    element.innerHTML = formattedQuote;
    console.log(formattedQuote);
};

function onButtonClick() {
    var button = document.getElementById("button");
    button.onclick = displayQuote;
};

window.onload = onButtonClick();

