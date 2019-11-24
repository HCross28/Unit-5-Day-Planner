$( document ).ready(function() {
    console.log( "ready!" );


var btn = document.getElementsByTagName("button");
console.log(btn.length);


$(btn).click(function(){
    $(this).html("<i class='fas fa-lock'></i>");
});









});