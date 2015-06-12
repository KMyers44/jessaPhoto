// slide with thumbnails
// $(window).load(function() {
//   $('.flexslider').flexslider({
//     animation: "slide",
//     controlNav: "thumbnails"
//   });
// });


// slideshow
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });


// page transitions
  var main = $('.main');

  main.css('display', 'none');

  main.fadeIn(500);

  $('a.transition').click(function(event){
      event.preventDefault();
      linkLocation = this.href;
      main.fadeOut(400, redirectPage);
  });

  function redirectPage() {
      window.location = linkLocation;
  }

});
