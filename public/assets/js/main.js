'use strict'
$(document).ready(() => {
  $(".apt-body").on('click', (event) => {
    console.log('clicked');
    if ("#amenities" !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = "#amenities";

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
  $("#amenities").on('click', (event) => {
    console.log('clicked again');
    if ("#interior" !== "") {
      event.preventDefault();

      var hash = "#interior";

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
           window.location.hash = hash;
      });
    }
  })
  $("#interior").on('click', (event) => {
    console.log('clicked thrice');
    if ("#headline" !== "") {
      event.preventDefault();

      var hash = "#headline";

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
           window.location.hash = hash;
      });
    }
  })
});




// $(document).ready(function() {
//   $('audio').mediaelementplayer({
//       alwaysShowControls: true,
//       features: ['playpause','volume', 'tracks', 'progress', 'duration', 'skipback'],
//       audioVolume: 'horizontal',
//       audioWidth: 325,
//       audioHeight: 40,
//       autoRewind: true,
//       skipBackInterval: 3,
//   }); 
// })