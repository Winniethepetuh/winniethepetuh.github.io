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

document.getElementById("form_button").onclick = function(){
    document.getElementById("form").style.display = "block";
}

document.getElementById("application-input").onclick = function(){
    document.getElementById("application-button").style.opacity = 1;
}