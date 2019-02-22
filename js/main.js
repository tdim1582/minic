
$( document ).ready(function() {

$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

$('.close_popup').click(function(e) {
  e.preventDefault();
  $('.popup').addClass("hidden");
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
      $("header").removeClass("sticky_fix")
   } else {
      // upscroll code
      $("header").addClass("sticky_fix")
   }
   lastScrollTop = st;
});

var controller = new ScrollMagic.Controller();

var tween = TweenMax.to('.inner', 0.5, {
      left: -243,
    });
 


new ScrollMagic.Scene({
        duration: 500,    // the scene should last for a scroll distance of 100px
        offset: 530    // start this scene after scrolling for 50px
    })
    .setPin("#picture") // pins the element for the the scene's duration
    .setTween(tween)
    .addTo(controller); // assign the scene to the controller
 });