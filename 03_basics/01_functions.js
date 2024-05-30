//functions-package of code which can be called in that particular program
//definition
/*function saymyname(){
console.log("hi");
console.log("suresh");
console.log("from ");
console.log("thapar");
}
//reference
saymyname
//calling of function or execution
saymyname()

function addtwonumbers(number1,number2){
    number1+number2
    console.log(number1+number2);

}
//values when taken to declare functions are called parameters
//values when taken when function is called are arguments

addtwonumbers(3,2)
addtwonumbers(3,"2")
addtwonumbers(3,"q")
addtwonumbers(3,null)

const result=addtwonumbers(3,8)
//console.log(result); undefined

function addtwonumbers(number1,number2){
   let result= number1+number2
    //console.log(number1+number2);
    return result;
    //return number1+number2;
   //after returning some output funxtion will not perform any task
}
const result=addtwonumbers(3,5)

console.log(result);


function loginusermessage(username){
    return `${username}  just logged in`
}

console.log(loginusermessage("hitesh"))
console.log(loginusermessage())//undefined


function loginusermessage(username="sam")//by default sam value
{
    if(username ==undefined) //(!username)
        {
            console.log("please enter a unsername");
            return
        }
    return `${username}  just logged in`
}

console.log(loginusermessage())

//when number of parameters are not known
function calculatecartprice(...num1){//rest or scope operator for multiple values to pass
    return num1
}

console.log(calculatecartprice(200,400,500));//array formed

function calculatecartprice(val1,val2,...num1){ //val1-200,val2-400
        return num1
}

console.log(calculatecartprice(200,400,500));//array formed

//functions with objects
const user={
    username:"hitesh",
    price:200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)

}

handleobject(user)

handleobject({
    username:"sam",
    price:300
})
*/
const mynewarray=[200,600,99,100]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray));