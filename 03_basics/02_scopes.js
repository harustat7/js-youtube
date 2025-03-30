/*let a=10
const b =20
var c=30

{}//scope-when occurs with a function or any if-else statement

console.log(a);
console.log(b);
console.log(c);
*/

// global scope
if(true){
    // block scope
    let a=10
    const b =20
    var c=30
    console.log("inner: ",a);

}

//console.log(a);
//console.log(b);
console.log(c);//shouldn"t print value outside the scope

//global scope is different in inspect console section and when we declare in javascript using node
