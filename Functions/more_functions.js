"use strict"



 function displayMailingLabel(name,address,city,state,zip){
  console.log (name);
   console.log(address);
   console.log (city,state,zip);
}

function addNumbers(num1,num2){

    let newNumber= num1 + num2;
    console.log(newNumber);
}

function displayReceipt (totalDue,amountPaid){

 let changeDue=totalDue-amountPaid;
 let message= "Total Due : " + totalDue + "\nAmount Paid : " + amountPaid + "\nChange Due : " + changeDue;

 if (amountPaid < totalDue){
  let message= "Total Due : " + totalDue + "\nAmount Paid : " + amountPaid + "\nChange Due : " + changeDue + "\n Customer owes  " + changeDue;
  
  }

  console.log(message);
}


displayMailingLabel("Big Bird","123 Sesame Street", "Chicago,", "IL","60000");
displayMailingLabel("Mickey Mouse","123 Disney Lane", "Orlando,", "FL","60000");
addNumbers(1,2);
addNumbers(3,4);
displayReceipt(500,300);