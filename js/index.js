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

    // http://stackoverflow.com/questions/9215806/how-to-update-the-twitter-share-button-url-with-dynamic-content
    displayShareButton: function (quote) {
        var shareButton = document.getElementById("twitter-share-section");
        shareButton.innerHTML = '<a id="tweet" class="twitter-share-button" href="https://twitter.com/share" data-size="large" data-text="' + this.formatQuote(quote) + '" data-hashtags="quotes" data-related="twitterapi,twitter">Tweet</a>';
    }

};

var controller = {
    generateNewQuote: function () {
        var quote = model.getQuote();

        view.displayQuote(quote);
        view.displayShareButton(quote);
        twttr.widgets.load();
    }
};

/**
 * From https://dev.twitter.com/web/javascript/loading:
 * 1. Assign a HTML element ID of twitter-wjs to easily identify if the JavaScript file already exists on the page. Exit early if the ID already exists.
 * 2. Asynchronously load Twitter’s widget JavaScript.
 * 3. Initialize an asynchronous function queue to hold functions dependent on Twitter’s widgets JavaScript until the script is available.
 */
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

window.onload = function () {
    controller.generateNewQuote();
    var button = document.getElementById("new-quote-button");
    button.onclick = controller.generateNewQuote;

};

