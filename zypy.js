$(document).ready(function() {
  $('.minus1').click(function() {
    old = parseInt($(this).siblings('.score').html());
    $(this).siblings('.score').html(old - 1);
  })
  $('.plus1').click(function() {
    old = parseInt($(this).siblings('.score').html());
    $(this).siblings('.score').html(old + 1);
  })
  $('.plus2').click(function() {
    old = parseInt($(this).siblings('.score').html());
    $(this).siblings('.score').html(old + 2);
  })
  $('.plus3').click(function() {
    old = parseInt($(this).siblings('.score').html());
    $(this).siblings('.score').html(old + 3);
  })
})
