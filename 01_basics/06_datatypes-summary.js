//Primitive(call by value)
//7 types:string ,number ,boolean ,null ,undefined ,symbol ,BigInt

const score=100
const scorevalue=100.3//number

const isloggedin=false//boolean

const outsidetemp=null//null

let userEmail;//undefined

const id= Symbol('123')
const id2=Symbol('123')//symbol
console.log(id == id2);

const bignumber=6432457865434578n//BigInt

//Reference/Non primitive(call by reference)
//array, objects, functions

const heros = ["shaktiman","naagraj","doga"]//arrays

//objects(any datatypes)
let myObj={
    name:"hitesh",
    age: 22,
}

//funtions
const myFunction=function(){
    console.log("hello world")
}

console.log(typeof bigNumber)//tells type of datatype
//typeof null=>object
//typeof function=>object function
//rest all by their names