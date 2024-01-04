//same datatype
//console.log(2>1);
//console.log(2>=1);
//console.log(1>2);

//different datatyes
//console.log("2" >1);
//console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
//the reason is that == and comparsions(> < =) work differently
//comparsions convert null to a number, treating it as 0.
//thats why null>=0 is true and null>0 is false

console.log(undefined ==0);//false
console.log(undefined > 0);//false
console.log(undefined <0);//false

// ===

console.log("2" == 2);
console.log("2" === 2);