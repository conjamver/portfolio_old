$(document).ready(function(){
//the character cap for text area
    var maxLength = 600;
//check value when use presses key
    $("textarea").keyup(function(){
        var length = $(this).val().length;
        length = maxLength-length; //set new length value
        
        //change to yellow if smaller than 200 but greater than 50
        if(length < 200 && length > 50)
        {
            $("#textarea-chars").text(length); //change the html
            $("#textarea-chars").css('color','#ffc107');
        }
        else if(length < 50){
            $("#textarea-chars").text(length);
            $("#textarea-chars").css('color','#dc3545');
        }
        //default
        else{
            $("#textarea-chars").text(length);
            $("#textarea-chars").css('color','black');
        }
    });
});