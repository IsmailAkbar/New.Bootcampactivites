// <!-- move over / move out effect -->
function myMouseOverEvent(mouseover) {
   //on mouse over we set :

   // color
mouseover.style.color = "red";

   //bkcolor
   
mouseover.style.background = "yellow";



   //set text to display on page

   mouseover.innerHTML = "The mouse is over the text";

mouseover.style.fontSize = "2rem";




}


function myMouseOutEvent(mouseout) {
    
//on mouse out we set :

   // color
   mouseout.style.color = "white";

   //bkcolor
   
mouseout.style.background = "blue";



   //set text to display on page

   mouseout.innerHTML = "The mouse is out the text";







}


// <!--  change effect of textfield -->

function myMouseFocus(mouseFocus) {
    
mouseFocus.style.color = "white";
mouseFocus.style.background = "black";








}

function onBlur(blur) {
    blur.style.color = "black";
blur.style.background = "white";





}

// <!-- Selectiing and displaying different colors -->
function changeEachColor(changec) {
    
document.body.style.background = changec.value


}



function changeEachImages(changeii) {
    
    document.body.style.background = "url('"+changeii+"')";
    
    
    }


















