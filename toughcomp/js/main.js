$(document).ready(function(){
    $('.slider').bxSlider({
        minSlides: 1,
		maxSlides: 3,
        slideWidth: 258,
        pager: ($(".bxslider2>.wrap").length > 1) ? true: false,
    });
  });

$('.parallax-window').parallax({imageSrc: './img/main__bg.png'});
