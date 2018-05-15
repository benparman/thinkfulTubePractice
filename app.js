'use strict';

const STATE = {
  apiKey: 'AIzaSyCXea0ie5sLMSUTuJOdNrkXuk-UX61BSmw',
  endpoint: 'https://www.googleapis.com/youtube/v3/search',
  query: null,
  results: null
};


function handleUserInputs() {
  console.log('handleuserinputs ran');
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
      maxresults: 5
    },
    url: STATE.endpoint,
    dataType: 'json',
    success: function(data){
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  };
  // $.getJSON(url, settings, function(data){
  //   console.log(data);
  // });
  $.ajax(settings);
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



$(document).ready(handleUserInputs, console.log('document ready'));