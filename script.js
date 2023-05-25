$(document).ready(function(){
    $("button").click(validate);
    function validate(){
        if($("#fname").val() == ""){
            $(".error-name").slideDown(600);
        }
        else{
            $(".error-name").slideUp();
        }
        if($("#email").val() == ""){
            $(".error-email").slideDown(600);
        }
        else{
            $(".error-email").slideUp();
        }
        if($("#pass").val() == ""){
            $(".error-pass").slideDown(600);
        }
        else{
            $(".error-pass").slideUp();
        }
        if($("#pass-c").val() != $("#pass").val()){
            $(".error-pass-c").slideDown(600);
        }
        else{
            $(".error-pass-c").slideUp();
        }
    }
});