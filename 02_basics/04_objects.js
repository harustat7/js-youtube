//for creating app user
const tinderUser = new Object()//singleton object
const tinderUser2= {}//non singleton object

console.log(tinderUser);//empty object
console.log(tinderUser2);//empty object

tinderUser2.id= "123abc"
tinderUser2.name="Harustat"
tinderUser2.isLoggedIn= false

//console.log(tinderUser2);

//nesting of objects
const regularUser = {
    email : "harustat@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Hitesh",
            lastname: "Chaudhary"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

//combining of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }//same problem as array
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)//Object.assign(target,source);{}-target,source-obj1,obj2
console.log(obj4);