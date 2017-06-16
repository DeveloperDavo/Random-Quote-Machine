function Quote(text, author) {
    this.text = text;
    this.author = author;
}

var model = {
    quotes: [
        new Quote("Life is about making an impact, not making an income.", "Kevin Kruse"),
        new Quote("Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"),
        new Quote("Strive not to be a success, but rather to be of value.", "Albert Einstein"),
        new Quote("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost"),
        new Quote("I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale")
    ],

    getQuote: function () {
        var index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index];
    }

};

var view = {
    formatQuote: function (quote) {
        return quote.text + " - " + quote.author;
    },

    displayQuote: function (quote) {
        var quoteElement = document.getElementById("quote");
        quoteElement.innerHTML = this.formatQuote(quote);
    },

    displayShareButton: function (quote) {
        var tweetLink = document.getElementById("tweet-link");
        tweetLink.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.formatQuote(quote)) + "&hashtags=quotes";
    }

};

var controller = {
    generateNewQuote: function () {
        var quote = model.getQuote();

        view.displayQuote(quote);
        view.displayShareButton(quote);
    }
};

window.onload = function () {
    controller.generateNewQuote();
    var button = document.getElementById("new-quote-button");
    button.onclick = controller.generateNewQuote;

};

