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
  console.log(STATE);
  const url = STATE.endpoint;
  const settings = {
    key: STATE.apiKey,
    part: 'snippet',
    q: STATE.query,
    maxresults: 5,
    dataType: 'json',
  };
  $.getJSON(url, settings, function(data){
    console.log(data);
  })
};



$(document).ready(handleUserInputs, console.log('document ready'));