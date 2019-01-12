$(document).ready(function($) {
  $('.filter-results').click(function() {
    $('.search-results_filters').toggle()
  });
  $('.search-filters_close-icon').click(function(){
    $('.search-results_filters').hide()
  });
});