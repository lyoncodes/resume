$(document).ready(() => {
  $(".spa-head-container").on("click", (e) => {
    console.log('clicked');
    if (".a-sp-container" !== ""){
     e.preventDefault();
     let hash = ".a-sp-container";
     $("html, body").animate({
       scrollTop: $(hash).offset().top} , 800)
    }
})});
