$(document).ready(function() {

  // Mouse Enter '#hello'
  $('#hello').mouseenter(function() {
    $(this).css("background-color", "#0000ff");
    $(this).css("width", "50em");
  });

  // Mouse Leave '#hello'
  $('#hello').mouseleave(function() {
    $(this).css("background-color", "#fff");
    $(this).css("width", "5em");

  });
});