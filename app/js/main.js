(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function($) {
  $('#data-picker').click(function() {
    $('.calender').toggle()
  });
});
$(document).ready(function($) {
  $('.filter-results').click(function() {
    $('.search-results_filters').toggle()
  });
  $('.search-filters_close-icon').click(function(){
    $('.search-results_filters').hide()
  });
});
$(document).ready(function($) {  
  $('#nav-toggle').click(function() {
    $('.mobile-menu').toggle()
  });
  $('.mobile-menu-user-avatar').click(function(){
    $('.mobile-menu-user-menu').toggle()
  });
  $('.mobile-menu-notification').click(function(){
    $('.more-notification').toggle()
  });
  $('.mobile-search').click(function(){
    $('.search-input-form').toggle()
  });
  $('.tablet-search-icon').click(function(){
    $('.search-input-form').toggle()
  });
  $('#close-button').click(function(){
    $('.search-input-form').toggle()
  });
  $('.mobile-menu-messages').click(function(){
    $('.more-messages').toggle()
  });
  $('#log-in').click(function(){
    $('.desktop-user-menu').toggle()
    $('.btn.btn-yellow.add-trip').toggleClass('active')
    $('.user-menu_container').toggleClass('active')
  });
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
})(jQuery);
  new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })

},{}]},{},[1])