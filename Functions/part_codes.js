"use strict"


function parseandDisplayPartcode(partcode){
    let positionOfColon =partcode.indexOf(":")
    let positionOfDash= partcode.indexOf("-")
    let suppliercode=partcode.substring(0,positionOfColon)
    let productNumber=partcode.substring(positionOfColon+1, positionOfDash)
    let productSize= partcode.substring(positionOfDash + 1)
    console.log( "The supplier of this product is " + suppliercode)
    console.log(" The product number of this product is " + productNumber)
    console.log("The product size of this product is " + productSize)
}

parseandDisplayPartcode("ACME:123-L")
parseandDisplayPartcode("DI:12345-M")
parseandDisplayPartcode("ACE:12345-M")