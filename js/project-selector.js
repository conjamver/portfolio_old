$(document).ready(function(){
var capstoneSelector = $('#capstoneCard');
var capstoneArticle = $('#article-capstone');
var placementSelector = $('#placementCard');
var placementArticle = $('#article-placement');
var personalSelector = $('#personalCard');

    //show or hide the article - CAPSTONE
    capstoneSelector.click(function(){
        if(placementArticle.css("display") != "none"){
            placementArticle.css("display","none");
        }
         //We only want to animate scroll when display opens
        if(capstoneArticle.css("display") === "none"){
            capstoneArticle.slideToggle(750,'linear');
            $("html, body").animate({ scrollTop: $("#article-capstone").offset().top }, 600);
        }else{
            capstoneArticle.slideToggle(750,'linear');
        }
    });
    
    //show or hide the article - PLACEMENT//
    placementSelector.click(function(){
        //hide an open article
        if(capstoneArticle.css("display") != "none"){
            capstoneArticle.css("display","none");
        }
        //We only want to animate scroll when display opens
        if(placementArticle.css("display") === "none"){
            placementArticle.slideToggle(750,'linear');
            $("html, body").animate({ scrollTop: $("#article-placement").offset().top }, 600);
        }else{
           placementArticle.slideToggle(750,"linear"); 
        }
    });
    
    //show or hide the article - PLACEMENT
    personalSelector.click(function(){
        alert("Personal projects will be showcased to the portfolio soon. If you would like to see progress, visit: https://github.com/conjamver ");
    });
});