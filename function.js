function sayname(){
    console.log("J")
    console.log("O")
    console.log("K")
    console.log("E")
    console.log("R")
}

sayname()

function sum(num1 , num2){
    console.log(num1+num2)
}
sum(2,3)

function sub(a,b){
    let result = a-b
    return result
}
const result =sub(10,8)
console.log(result)

function LoginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return  // we used this return so that the next return does not get executed  
    }
    return username + " Just logged in" 
}

const mesaage =LoginUserMessage()
console.log(mesaage)

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(100,300,400))

const user ={
    username:"Joker",
    price :200
}
function handleObject(randomobject){
    console.log("Username is "+randomobject.username +" and the price is "+randomobject.price)
}

handleObject(user)

const myNewArray =[1,2,4,5,6]
function getSecondValue(getarray){
    return getarray[2]
}
console.log(getSecondValue(myNewArray))