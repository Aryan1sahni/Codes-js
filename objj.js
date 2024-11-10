const user = {
    username : "joker",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got User details from database")
        console.log(this) // this keyword gives the values of current context
    }
}

console.log(user.username)
console.log(user.getUserDetails())


function User(username , loggedCount , singedIn ){
    this.username = username
    this.loggedCount = loggedCount
    this.signedIn = singedIn

    return this
}

const UserOne = new User("joker" , 23 , true)  // using new we get a new instance , it creates an empty object , 
const UserTwo = User("Hacker" , 4 , false)

console.log(UserOne)