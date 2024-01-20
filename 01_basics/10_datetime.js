//dates

/*
let myDate = new Date()
console.log(myDate);

//conversion to string
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//date is object datatype


let myCreatedDate = new Date(2023,0,23)//year month day
//month start with 0 that is 0 is january month
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let mydate2= new Date(2023,0,23,5,3)//year month day hours minutes
console.log(mydate2.toLocaleString());


//dates with particular format
//yy-mm-dd(in this fromat month start from 01-january)
let myDate3 = new Date("2023-02-14")
console.log(myDate3.toLocaleString());

//mm-dd-yy
let myDate4 = new Date("01-14-2023")
console.log(myDate4.toLocaleString());
*/

/*
//time

let myTimeStamp= Date.now()
console.log(myTimeStamp);//milliseconds

let mydate5 = new Date("01-14-2023")
console.log(mydate5.getTime());//for comparsion of time

//conversion in seconds
console.log(Math.floor(Date.now()/1000));//in seconds
*/

//more methods of date and time

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//by string interpolation
//'${newDate.getDay()} and the time is ${newDate.getTime()}

//important method for customisation 
newDate.toLocaleString('default', {
    weekday: "long"
})