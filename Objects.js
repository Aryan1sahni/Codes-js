// Object Literal

let mySym = Symbol("Key1")
// Defining in terms of Key and Values
let UserData = {
    name: "Joker",
    Age: 22,
    location:"Delhi",
    Email: "example@gmail.com",
    isLogged : false,
    lastLogin : ["Monday","Friday"],
    "Area" : "North",
    [mySym] : "MyKey"
}

console.log(UserData.name) // this is one of the way to access the elements of an Object
console.log(UserData["Area"]) // this is another way to accesss the elements of an Object
console.log(UserData[mySym])  // Creating a symbol in Object

UserData.Email ="Demo@gmail.com" //  Change the value of an Object
console.log(UserData.Email)
//Object.freeze(UserData) // Now we will not be able to change the value
UserData.name= "Hacker"
console.log(UserData.name)

UserData.greeting = function(){
    console.log("Welcome JS User")
}
console.log(UserData.greeting())

UserData.greetingtwo = function(){
    console.log("Welcome " + this.name)
}
console.log(UserData.greetingtwo())