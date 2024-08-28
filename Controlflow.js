let num1=10
let num2="10"
if(num1===num2){ // === checks the datatype as well as the value
    console.log("true")
}
else{
    console.log("false")
}

let a =134
if(a>50 && a<100){
    console.log("A is greater than 50")
}
else if(a>80 ){
    console.log("A is greater than 80")
}
else{
}

let letter ="A"

switch (letter) {
    case "A":
        console.log("A letter")
        break;
    case "B":
        console.log("B letter")
        break;
    default:
        console.log("Invalid letter")
        break;
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const obj={

}
if(Object.keys(obj).length===0){  // This is used to check whether an object is empty or not
    console.log("Empty Object")
}

//  Nullish Coalescing Operator(??)

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)

