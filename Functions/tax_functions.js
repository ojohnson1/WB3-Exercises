"use strict";

//grossPay automatically declared as a variable

function getSocSecTax(grossPay) {
  let socialSecurityTax = grossPay * 0.062;

  return socialSecurityTax;
}
console.log(getSocSecTax(750));
console.log(getSocSecTax(1550));
console.log(getSocSecTax(1100));

function getMedicareTax(grossPay) {
  let medicareTax = grossPay * 0.0145;
  medicareTax = medicareTax.toFixed(2);
  return medicareTax;
}

console.log(getMedicareTax(750));
console.log(getMedicareTax(1550));
console.log(getMedicareTax(1100));

function getFederalTax(grossPay,withholdingCode) {
  
  
  if ((withholdingCode == 0)) 
  {
    let federalTaxRate = 0.23;
    return grossPay * federalTaxRate;

  } 
  
  else if ((withholdingCode == 1))
  {
    let federalTaxRate = 0.21;
    return grossPay * federalTaxRate;
  } 
  
  else if ((withholdingCode ==2)) 
  {
    let federalTaxRate = 0.195;
    return grossPay * federalTaxRate;
  }
  
  else if ((withholdingCode == 3)) 
  {
    let federalTaxRate = 0.185;
    return grossPay * federalTaxRate;
  } 
  
  else if (withholdingCode >= 4 )
   {
    let federalTaxRate = 0.18;
    return grossPay * federalTaxRate;

    if(withholdingCode== 4++){
           
    }
  }
}

console.log(getFederalTax(750,0));
console.log(getFederalTax(1550,2));
