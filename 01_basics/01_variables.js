const accountId = 144553
let accountEmail = "harustat@google.com"
var accountPassword ="12345"
accountCity ="Ludhiana"
let accountState;

//accountId=2//not allowed for constant 

accountEmail="hc@google.com"
accountPassword="23415"
accountCity="Amritsar"

/*
prefer not to use var because of issue in block scope and functional scope*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])