//stack and heap memory

//stack(primitive datatypes),copy

//heap(non-primitive),reference

//stack
let myYoutubeName= "harustatkaur"
let anothername= myYoutubeName
anothername="chaiaurcode"
console.log(myYoutubeName);//ORIGINAL
console.log(anothername);//COPY

//heap
let user1={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2=user1;

user2.email= "user2@google.com"

console.log(user1.email);
console.log(user2.email);