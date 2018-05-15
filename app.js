'use strict';

const STATE = {
  apiKey: 'AIzaSyCXea0ie5sLMSUTuJOdNrkXuk-UX61BSmw',
  endpoint: 'https://www.googleapis.com/youtube/v3/search',
  query: null,
  results: null,
  error: null,
};


function handleUserInputs() {
  $('.js-query').submit(function(event){
    event.preventDefault();
    STATE.query = $('#searchTerm').val();
    getResults();
  });
}

function getResults() {
  const settings = {
    data: {
      q: STATE.query,
      part: 'snippet',
      key: STATE.apiKey,
      maxresults: 5,
      type: 'video'
    },
    url: STATE.endpoint,
    success: function(data){
      STATE.results = data;
      renderHTML(data);
    },
    error: function(error) {
      STATE.error = error;
      console.log(`There was a problem with your request.  HTTP status ${error.status}, ${error.responseText}!`);
    }
  };
  // $.getJSON(url, settings, function(data){
  //   console.log(data);
  // });
  $.ajax(settings);
  
}

function renderHTML(data) {
  let items = data.items;
  console.log(items);
  let htmlString = '';

  items.forEach(element => {
    htmlString += `<a href="https://youtu.be/${element.id.videoId}"><img src="${element.snippet.thumbnails.default.url}">`;
  });

  $('.results').html(htmlString);
  console.log(htmlString);
}

//========================    getResults function with .ajax() call - not working
// function getResults() {
//   console.log(STATE);
//   const settings = {
//     url: STATE.endpoint,
//     key: STATE.apiKey,
//     part: ‘snippet’,
//     q: STATE.query,
//     maxresults: 5,
//     success: function(data) {
//       console.log(data);
//     }
//   };
// $.getJSON(url, settings, function(data){
//   console.log(data);
// });
// }



$(document).ready(handleUserInputs);