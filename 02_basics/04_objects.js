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

console.log(regularUser.fullname.userfullname.firstname);

//combining of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }//same problem as array
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)//Object.assign(target,source);{}-target,source-obj1,obj2
console.log(obj4);

//another way of combining objects by spreading objects
const obj5 = {...obj1, ...obj2}
console.log(obj5);

//combining of objects in the form of arrays
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

//calling the user 1 and in particular email
users[1].email
console.log(tinderUser2);

//we can call only the keys or the values of the objects individually
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));

//another method is by calling arrays of different key value pairs and forming a single array
console.log(Object.entries(tinderUser2));

//asking the object if it has a particular key because if any key doesnt have a value then it can create a problem by crashing the whole object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//by default the key and value pairs are in the string format
const course = {
    "coursename": "js in hindi",
    "price": "999",
    "courseInstructor": "hitesh"
}

 console.log(course.courseInstructor);

 //destructing courseInstructor to instructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//in react

const navbar = () =>{

}

navbar(company = "hitesh")

//APIS

//formation of apis by JSON in the form of objects
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//formation of apis by JSON in the form of arrays with objects inside

[
    {},
    {},
    {}
]

//famous api-Random user me
//copy its code to JSON formatter 
//to have better understanding of JSON in tree and different different formats
