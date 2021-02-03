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
      console.log('got a response', response); // response == res.send from server.js
      // Take array of quotes (quoteList)
      // loop through em
      for (let quote of response) {
        $('#listOfQuotes').append(
          `<li>
            <blockquote>${quote.quote} -${quote.author}</blockquote>
          </li>`
        );
      }
      // .append() to the DOM
    })

    // this will 'catch' server errors and do something
    .catch(function () {
      alert('Sorry! Contact your webmaster');
    });
}
