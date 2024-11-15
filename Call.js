function SetUser(username){
    this.username =username
}

function createUser(username , email , password){
   // SetUser(username) This will not set the user as this function this context is diffrent from the other
    SetUser.call(this, username)
    this.email= email
    this.password = password
}

const user = new createUser("JOker" , "Joker@example.com","1234")

console.log(user)