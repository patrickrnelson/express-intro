const express = require('express'); // since there is no './' it will look for express in the modules folder

// console.log('express', express);

// Create our application
const app = express();

const port = 3000;

// Share any files inside the "public" folder
// these are the client side items
app.use(express.static('server/public'));

// Listen for network requests
app.listen(port, function () {
  // can be any number. Should be 3000 or 5000 for ease
  // When the server is ready, call this function
  console.log('I am listening.....', port);
});
