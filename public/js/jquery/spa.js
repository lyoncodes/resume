//spa page scroll function
$(document).ready(() => {
  $('#card1').mouseover(function() {
      $('#data-a').addClass('data-on-hover');
  })
  // .mouseout(function() {
  //   $('#data-a').removeClass('data-on-hover');
  // });
  $('#card2').mouseover(function() {
    $('#data-b').addClass('data-on-hover');
  }).mouseout(function() {
  $('#data-b').removeClass('data-on-hover');
  });
  $('#card3').mouseover(function() {
    $('#data-c').addClass('data-on-hover');
  }).mouseout(function() {
  $('#data-c').removeClass('data-on-hover');
  });

});

