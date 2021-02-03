const express = require('express'); // since there is no './' it will look for express in the modules folder

// console.log('express', express);

const quotes = require('./modules/quotes');

// Create our application
const app = express();

// can be any number. Should be 3000 or 5000 for ease
const port = 3000;

// Share any files inside the "public" folder
// these are the client side items
app.use(express.static('server/public'));
// set up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('I am listening.....', port);
});

// GET ENDPOINT
// if someone requests quotes, we run a function and give them some quotes.
app.get('/quotes', function (req, res) {
  console.log('GET Request for quotes');
  res.send(quotes.getNextQuote()); // instead of 'return' like in a normal function, we use res.send
});

// GET /allTheQuotes
// Return an array with all of the quotes in it
app.get('/allthequotes', function (req, res) {
  console.log('Get request for allTheQuotes');
  res.send(quotes.quoteList);
});

// POST ENDPOINT
// post something to quotes.js
app.post('/quotes', (req, res) => {
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);
  // Add to quotesData
  quotes.addQuote(quote);
  // respond with something
  res.sendStatus(200); // means OK!
});
