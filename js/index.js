var model = {
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

var view = {
    displayQuote: function(formattedQuote) {
        var quoteElement = document.getElementById("quote");
        quoteElement.innerHTML = formattedQuote;
    },

    // http://stackoverflow.com/questions/9215806/how-to-update-the-twitter-share-button-url-with-dynamic-content
    displayShareButton: function(formattedQuote) {
        var shareButton = document.getElementById("twitter-share-section");
        shareButton.innerHTML = '<a id="tweet" class="twitter-share-button" href="https://twitter.com/share" data-size="large" data-text="' + formattedQuote + '" data-hashtags="quotes" data-related="twitterapi,twitter">Tweet</a>';
    }

}

var controller = {
    formateQuote: function() {
        var quote = model.generateRandomQuote();
        return quote.text + " - " + quote.person;
    },

    displayFormattedQuoteAndLoadShareButton: function() {
        var formattedQuote = controller.formateQuote();

        view.displayQuote(formattedQuote);
        view.displayShareButton(formattedQuote);
        twttr.widgets.load();
    }
}

// https://dev.twitter.com/web/javascript/loading
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

window.onload = function() {
    var button = document.getElementById("button");
    button.onclick = controller.displayFormattedQuoteAndLoadShareButton;

    controller.displayFormattedQuoteAndLoadShareButton();
}

