//spa page scroll function
$(document).ready(() => {
$(".spa-head-container").on("click", (e) => {
  console.log('clicked');
  if (".sp-container" !== ""){
   e.preventDefault();
   let hash = ".sp-container";
   $("html, body").animate({
     scrollTop: $(hash).offset().top} , 800)
  }
})});