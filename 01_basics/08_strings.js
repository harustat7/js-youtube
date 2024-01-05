const name="harustat"//declartion of string way1
const count= 50

//concatenate

//console.log(name +count + "value");  old syntax

//string interpolation for concatenate
console.log(`Hello my name is ${name} and my repo count is ${count}`);

//declartion of string way 2 using object
const gameName = new String('hitesh')

console.log(gameName[0]);
console.log(gameName.__proto__);