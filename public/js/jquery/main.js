'use strict'
$(document).ready(() => {

// nav menu scroll downs
  $("#target1").on('click', (event) => {
    $("#hash1").toggle(600);
  })
  $("#target2").on('click', (event) => {
    $("#hash2").toggle(600);
  })
  $("#target3").on('click', (event) => {
    $("#hash3").toggle(600);
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

 //main-page section scroll function
 $("#favorites-link").on('click', (e) => {
   $('.display-on-click').show(800);
    if (".display-on-click" !== ""){
      e.preventDefault();
      let hash = "#favorites-display"
      $("html, body").animate({
        scrollTop: $(hash) }, 800, () => {
          window.location.hash = hash;
      })
    }
 });
});