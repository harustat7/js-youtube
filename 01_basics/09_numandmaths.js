/*const score = 400
console.log(score);

//for number datatype
const balance = new Number(100)
console.log(balance);

//number to string to get extra functions
//string has many other functions than other datatypes
console.log(balance.toString());

//for length of string
console.log(balance.toString().length);

//for number of decimals(precision)
console.log(balance.toFixed(2));//2 decimal points

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//precision till 3 numbers that is till 123

const hundreds = 1000000
console.log(hundreds.toLocaleString());//commas according to US standards of number system

//for indian number system
console.log(hundreds.toLocaleString('en-IN'));
*/


//--------------MATHS------------------
console.log(Math);

//negative sign changes to positive
console.log(Math.abs(-4));

//for rounding off
console.log(Math.round(4.6));
//upper value
console.log(Math.ceil(4.1));
//lower value
console.log(Math.floor(4.11));

//square root-sqrt()
//power-pow()

//min value in an array
console.log(Math.min(4,3,6,8));
//similarily for max

//random value is always between 0 and 1
console.log(Math.random());

//for value greater than 1 and less than equal to 9
console.log((Math.random()*10) +1);