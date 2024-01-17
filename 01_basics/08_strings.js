const name="harustat"//declartion of string way1
const count= 50

//concatenate

//console.log(name +count + "value");  old syntax

//string interpolation for concatenate
console.log(`Hello my name is ${name} and my repo count is ${count}`);

//declartion of string way 2 using object
const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

//string objects

//for length of string
console.log(gameName.length);

//for converting string to uppercase in terminal
console.log(gameName.toUpperCase());

//for finding character at a specific place
console.log(gameName.charAt(2));

//for finding index of a specific character
console.log(gameName.indexOf('t'));

//for displaying specific part of the string
const newString = gameName.substring(0,4)//last value is not included and negative values not allowed
console.log(newString);

const anotherString = gameName.slice(-8,4)//negative values can be given(imp)
console.log(anotherString);

//trim and replace method

const newStringOne = "      hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim);//for trimming space 

//const url = "https://hitesh.com/hitesh choudhary"//space left which cannot be understand automatically by the website, so %20 is automatically added between hitesh and chaudhary in this example as shown below
const url ="https://hitesh.com/hitesh%20choudhary"

url.replace('%20','-')
console.log(url.replace('%20','-'));

//url options

console.log(url.includes('hitesh'));//true

console.log(url.includes('sundar'));//false

//replace string to array
console.log(gameName.split(' - '));