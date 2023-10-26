"use strict";

function convertFtoC (fahrenheit)
{
    let celsius;
    celsius=(fahrenheit-32)*5/9;
    return celsius;
}

function convertCtoF (celsius)
{
    let fahrenheit;
    fahrenheit= (celsius+32)*9/5;
    return fahrenheit;
}


console.log(convertFtoC(212));