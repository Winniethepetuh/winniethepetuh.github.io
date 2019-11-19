$(document).ready(function(){
    $('.slider').bxSlider({
        minSlides: 1,
		maxSlides: 5,
        slideWidth: 180,
        auto: true,
        pause: 3000,
        controls: true,
        pager: ($(".bxslider2>.wrap").length > 1) ? true: false,
    });
  });

$('.parallax-window').parallax({imageSrc: '../img/main__bg.png'});
