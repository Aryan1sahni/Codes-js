const User={
    username : "Hacker1",
    price : 34400,
    Welcomemessage : function(){
        console.log("Welcome to the website ,"+this.username) // this keyword tells the current context
    }
}

User.Welcomemessage()
User.username ="Joker1"
User.Welcomemessage

function demo(){
    console.log(this)
}
demo()

// Arrow function

const afun = () =>{
    console.log("afun function")
}
afun()

const addTwo= (num1 , num2) => num1 + num2  // Another way to declare arrow function
console.log(addTwo(5,4))