$( document ).ready(function() {
    console.log( "ready!" );


var btn = document.getElementsByTagName("button");
var image = document.getElementsByTagName("img");

// console.log(btn.length);


$(image).click(function(){
    // $(this).html("<i class='fas fa-lock'></i>");
 
var state = $(this).attr("data-state");
var txtBox = document.getElementsByTagName("textarea");
var taskList = document.getElementById("task-list");


    if(state==="closed"){
        $(this).attr("src", $(this).attr("data-open"));
        $(this).attr("data-state", "open");
        state=$(this).attr("data-state");
        $(txtBox).show();
        $(taskList).hide();
    }else{
        $(this).attr("src", $(this).attr("data-closed"));
        $(this).attr("data-state", "closed");
        state= $(this).attr("data-state"); 
        
        // Somewhere in here will be code for making the button press save the inserted text, save to local storage and then append it to the #task-list <ul> which will take the place of the now removed textarea.
        // At submission I got nowhere in figuring out how to complete the above mentioned objective

        $(txtBox).hide();
        $(taskList).show();

    }



});

//below will be the code for initiating the clock functionality with the highlighting of rows. 
var dt = new Date();
var time = dt.getMonth() + "/" + dt.getDay() + "/" + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
console.log(time); //for some reason my date shows as "10/6/2019" in the console??? 

/* $(time){
    if (time.hour === 09)
        $("#nine").style(color = "red");

}; */

});