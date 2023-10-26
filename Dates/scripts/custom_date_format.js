
let customDate= new Date( "07/27/2022");

const months = ["January", "February", "March", "April",  
"May", "June", "July", "August", "September", 
"October", "November", "December"]; 


let month= months[customDate.getMonth()];
let day= customDate.getDate();
let year=customDate.getFullYear();
let weekDay= "(Monday)";

let msg= `${day}-${month}-${year} ${weekDay}`;

console.log(msg)