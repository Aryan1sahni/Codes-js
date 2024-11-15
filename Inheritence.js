class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log("The username is "+ this.username )
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    addCourse(){
        console.log(this.username)
    }
}

const User1 = new Teacher("Joker","email@gmail.com")
console.log(User1.addCourse())

const User2 = new User("Hacker")
console.log(User2.username)


console.log(User1 === User2)