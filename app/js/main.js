$(function() {
  var openBtn = $('#btn'),
      slideMenu = $('#menu'),
      layer = $('<div />').addClass('layer'),
      close = $('#close');
  
  
  openBtn.on("click", function() {
  if (slideMenu.is(':hidden')) {
  layer.appendTo('body');
  slideMenu.slideDown(300);
  }
  });
  close.on("click", function(){
    if (sllideMenu.is(':hidden')) {
    }
    else {
      slideMenu.slideUp(300);
    layer.remove();
    }
  });
 });
 


 document.getElementById("btn").onclick = function() {
  document.getElementById("btn").style.display = 'none';
 };