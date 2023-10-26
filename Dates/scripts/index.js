"use strict";

window.onload = init;
 
function init(){

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = onSubmitBtnClicked;
}


function onSubmitBtnClicked () {

    const dateField= document.getElementById("dateField");
    
    let dateValue= dateField.value;
    (dateValue.toString());

    const dateDisplay = document.getElementById("dateDisplay");
      dateDisplay.innerText=dateValue;
   
}