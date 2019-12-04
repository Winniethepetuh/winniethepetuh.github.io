$('.slicker').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
});

AOS.init();

$(document).ready(function() {
    $('.patient-quote').flexslider();    
  });