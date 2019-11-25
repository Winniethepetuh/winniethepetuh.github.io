$('.slick').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
});

AOS.init();

document.getElementById("slick-slide-control00").onclick = function(){
    document.getElementById("slick-slide-control00").style.background = "#283288";
    document.getElementById("slick-slide-control01").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control02").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control03").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control04").style.background = "rgba(0, 0, 0, 0)";
}
document.getElementById("slick-slide-control01").onclick = function(){
    document.getElementById("slick-slide-control01").style.background = "#283288";
    document.getElementById("slick-slide-control00").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control02").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control03").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control04").style.background = "rgba(0, 0, 0, 0)";
}
document.getElementById("slick-slide-control02").onclick = function(){
    document.getElementById("slick-slide-control02").style.background = "#283288";
    document.getElementById("slick-slide-control00").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control01").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control03").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control04").style.background = "rgba(0, 0, 0, 0)";
}
document.getElementById("slick-slide-control03").onclick = function(){
    document.getElementById("slick-slide-control03").style.background = "#283288";
    document.getElementById("slick-slide-control00").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control02").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control01").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control04").style.background = "rgba(0, 0, 0, 0)";
}
document.getElementById("slick-slide-control04").onclick = function(){
    document.getElementById("slick-slide-control04").style.background = "#283288";
    document.getElementById("slick-slide-control00").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control02").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control03").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("slick-slide-control01").style.background = "rgba(0, 0, 0, 0)";
}

$(document).ready(function() {
    $('.patient-quote').flexslider();    
  });

document.getElementById("form_button").onclick = function(){
    document.getElementById("form").style.display = "none";
}