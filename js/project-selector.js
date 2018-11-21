$(document).ready(function(){
var capstoneSelector = $('#capstoneCard');
var capstoneArticle = $('#article-capstone');
var placementSelector = $('#placementCard');
var placementArticle = $('#article-placement');
var personalSelector = $('#personalCard');


    //show or hide the article - CAPSTONE
    capstoneSelector.click(function(){
        capstoneArticle.slideToggle(500);
    });
    //show or hide the article - PLACEMENT
    placementSelector.click(function(){
        placementArticle.slideToggle(500);
    });
    //show or hide the article - PLACEMENT
    personalSelector.click(function(){
        alert("Personal projects will be showcased to the portfolio soon. If you would like to see progress, visit: https://github.com/conjamver ");
    });
});