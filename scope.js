let a =100
if(true){
    let a =10
    const b =20
    var c =30
    console.log("Inner :"+a)
}

//console.log(a)
//console.log(b)
console.log(c)
console.log(a)

function one(){
    const username ="joker"

    function two(){
        const website = "www.example.com"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()

if(true){
    const username="hacker"
    if(username ==="hacker"){
        const website = "google"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

// when we we declare a function normaly then we can call it before declaring it
addOne(3)
function addOne(num){
    return  num +1
}
// when we create a function ans store it in a variable then we cannot call it before declaring it
const addTwo = function(num){
    return num +2
}
console.log(addTwo(4))
