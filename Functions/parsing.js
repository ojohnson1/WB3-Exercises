"use strict"



function parseandDisplayName(name1){
let postionOfSpace = name1.indexOf(" ");
let firstName = name1.substring(0,postionOfSpace)
let lastName = name1.substring(postionOfSpace + 1)
let fullName = firstName + " " + lastName
console.log( "Full Name:" + fullName);
console.log( "First Name:" + firstName);
console.log( "Last Name:" + lastName);

}

parseandDisplayName("Brenda Kaye");
parseandDisplayName("Ian Auston");
parseandDisplayName("Siddalee Grace");
