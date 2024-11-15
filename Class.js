class User{
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){ // in class we create function like this
        return this.password +"abc"
    }

    toCaptialize(){
        return this.username.toUpperCase()
    }
}

const joker = new User("joker" , "Joker@gmail.com" , "12354")
console.log(joker.encryptpassword())
console.log(joker.toCaptialize())