//spa page scroll function
$(document).ready(() => {
  $('.card1').mouseover(function() {
      $('.data').addClass('data-on-hover');
  }).mouseout(function() {
    $('.data').removeClass('data-on-hover');
  });
});

