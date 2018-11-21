$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop) { 
      $navbar.stop().fadeOut()
    } else {  
      $navbar.stop().fadeIn()
    }
    lastScrollTop = st;
  });
});