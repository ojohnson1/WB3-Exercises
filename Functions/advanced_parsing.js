'use strict'

function hasOnlyName(name1){
return ( name1.indexOf (" ") < 0 )

}


function hasFirstAndLastName (name1){

}




function hasFirstMiddleLastName (name1){

}





function parseandDisplayName(name1){
    let postionOfSpace = name1.indexOf(" ");
    let twoSpacesinName= name1 (postionOfSpace,name1.indexOf (" "))

   if ( postionOfSpace,name1.indexOf (" ") == true );

   {
    let postionOfSpace = name1.indexOf (" ");
    let firstName = name1.substring (0,postionOfSpace);
    let middleName = name1.substring (postionOfSpace +1);
    let lastName = name1.substring (postionOfSpace + 6);

    console.log( "First Name:" + firstName);
     console.log( "Middle Name:" + middleName);
     console.log( "Last Name:" + lastName);

   }

 else (postionOfSpace,name1.indexOf (" ") == false ){
    let firstName = name1.substring(0,postionOfSpace)
    let lastName = name1.substring(postionOfSpace + 1)
    let fullName = firstName + " " + lastName
    console.log( "Full Name:" + fullName);
    console.log( "First Name:" + firstName);
    console.log( "Last Name:" + lastName);

 }
   

   

}