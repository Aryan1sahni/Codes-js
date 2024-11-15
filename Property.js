class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log("Username : "+this.username)
    }

    static createId(){   // We do not want access of this method    
        return "123"
    }
}

const joker = new User("Joker")
console.log(joker.logMe())

//console.log(createId())