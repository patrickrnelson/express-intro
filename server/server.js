const express = require('express'); // since there is no './' it will look for express in the modules folder

// console.log('express', express);

// Create our application
const app = express();

// Listen for network requests
app.listen(3000, function () {
  // can be any number. Should be 3000 or 5000 for ease
  // When the server is ready, call this function
  console.log('I am listening.....', 3000);
});
