
$( document ).ready(function() {
// window.onscroll = function() {myFunction()};

// var header = $('.header');
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// $('.lazy').slick({
//   lazyLoad: 'ondemand',
//   slidesToShow: 2,
//   slidesToScroll: 1
// });


// var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
// 		duration: 500,	// the scene should last for a scroll distance of 100px
// 		offset: 50	// start this scene after scrolling for 50px
// 	})
// 	.setPin(".picture") // pins the element for the the scene's duration
//   .addTo(controller); // assign the scene to the controller
  
  // When the DOM is ready
//  $(function() {
  
// //   // Init ScrollMagic Controller
//   var scrollMagicController = new ScrollMagic();
  
//   //Create Animation for 0.5s
//   var tween = TweenMax.to('.picture img', 0.5, {
//     scale: 2
//   });
  
//   // Create the Scene and trigger when visible
//   var scene = new ScrollScene({
//     triggerElement: '.picture',
//     offset: 550 /* offset the trigger 150px below #scene's top */
//   })
//   .setTween(tween)
//   .addTo(scrollMagicController);
  
//   // Add debug indicators fixed on right side
//    scene.addIndicators();
  
// });

$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: false
});

$('.close_popup').click(function(e) {
  e.preventDefault();
  $('.popup').addClass("hidden");
});

// init controller
var controller = new ScrollMagic.Controller();

// var iphoneIntroTl = new TimelineMax();
// 	iphoneIntroTl
// 		.from($iphone, 1, {yPercent: 50,xPercent: 100, ease: Power4.easeInOut})
// 		.to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');

var tween = TweenMax.to('.inner', 0.5, {
      left: 117,
    });
    

//create a scene
new ScrollMagic.Scene({
        duration: 400,    // the scene should last for a scroll distance of 100px
        offset: 350    // start this scene after scrolling for 50px
    })
    .setPin("#picture") // pins the element for the the scene's duration
    .setTween(tween)
    .addTo(controller); // assign the scene to the controller
 });