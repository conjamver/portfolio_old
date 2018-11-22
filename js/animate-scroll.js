//Animate the scrolling
$( document ).ready(function() {
      $('#btn-link1').click(function(){
        $("html, body").animate({ scrollTop: $("#article-welcome").offset().top }, 600);                  
    });
    $('#btn-link2').click(function(){
        $("html, body").animate({ scrollTop: $("#article-projects").offset().top }, 600);                  
    });
    $('#btn-link3').click(function(){
        $("html, body").animate({ scrollTop: $("#article-contact").offset().top }, 600);                  
    });
   
});