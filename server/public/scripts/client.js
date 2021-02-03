console.log('js js js');

$(document).ready(onReady);

function onReady() {
  console.log('so ready');

  // Grab that data from the server
  // GET /allTheQuotes

  // What is AJAX??
  // Tool fot making HTTP network requests
  // from client side JS code
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    // promise to call me back later
    .then(function (response) {
      console.log('got a response', response);
    });

  // response == res.send from server.js

  console.log('so much to do... so little time');
  console.log('....');
  console.log('so much to do... so little time');
  console.log('....');

  // Take array of quotes
  // loop through em
  // .append() to the DOM
}
