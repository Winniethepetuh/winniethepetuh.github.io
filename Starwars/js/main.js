$( document ).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        navClass: ['arrow-right', 'arrow-left'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            900:{
                items:3
            },
            1280:{
                items:4
            }
        }
    })
});