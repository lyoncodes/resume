'use strict'
$(document).ready(() => {

  // sky scraper scroll functions
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
      }, 800);
    }
  })

// nav menu scroll downs
  $("#target1").on('click', (event) => {
    $("#hash1").toggle(600);
    $(".nav-menu-ul").scrollTop = $(".nav-menu-ul").scrollHeight;
  })
  $("#target2").on('click', (event) => {
    $("#hash2").toggle(600);
    $(".nav-menu-ul").scrollTop = $(".nav-menu-ul").scrollHeight;
  })
  $("#target3").on('click', (event) => {
    $("#hash3").toggle(600);
    $(".nav-menu-ul").scrollTop = $(".nav-menu-ul").scrollHeight;
  })

// nav menu image labels
 $("#box1").on('hover', (event)=>{
   $("#label1").toggle(100);
 })
 $("#box2").on('hover', (event)=>{
  $("#label2").toggle(100);
 })
 $("#box3").on('hover', (event)=>{
  $("#label3").toggle(100);
 })
 $("#box4").on('hover', (event)=>{
  $("#label4").toggle(100);
 })
 $("#box5").on('hover', (event)=>{
  $("#label5").toggle(100);
 })

 //main-page section display
 $("#favorites-link").on('click', (e) => {
   $('.display-on-click').toggle(800);
    if (".display-on-click" !== ""){
      e.preventDefault();
      let hash = "#favorites-display"
      $("html, body").animate({
        scrollTop: $(hash).offset().top }, 800, () => {
          window.location.hash = hash;
      })
    }
 });

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