// singleton-like literals then cannot be formed but if used as constructors then singleton
//other way is using constructors

//object literals(way1)
//using keys and values

const mySym = Symbol("key1")//using symbol as a key

const JsUser={
    name: "Hitesh",
    "full-name": "Hitesh Chaudhary",
    [mySym] : "mykey1",//this is the coorect way inside//mySym -symbol not possible like this
    age: 18,
    location: "Patiala",
    email: "hitesh@google.com",
    isLoggedin: false,
    lastLoggedinDays: ["Monday","Sunday"]
}
/*
console.log(JsUser.email);//not the coorect way
console.log(JsUser["email"]);

//cannot access full-name through dot operator but only through string operator
console.log(JsUser["full-name"]);

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);//it is printing the value which is defined in the object because it is not being used as a symbol but as a string and if it being used as a symbol then you cannot declare the symbol in the object like that but outside the object as shown above

console.log(JsUser[mySym]);//write way to access symbols

//change values of objects
JsUser.email = "hiteshc@gmail.com"
//lock values
Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"//doesn't change
console.log(JsUser);
*/

//add functions
JsUser.greeting = function(){
    console.log("hello js user");
}

//console.log(JsUser.greeting);//return back of function that is function is not being executed 
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);//string interpolation using backticks
}

console.log(JsUser.greeting2());