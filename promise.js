const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //Db calls, cryptography , network related

    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})


promiseOne.then(()=>{
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    })
}).then(function(){
    console.log("Async resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Joker" , email : "joker@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hacker",password:"123"})
        }
        else{
            reject("Something went wrong")
        }
    },2000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then( (name)=>{  // this is called chaining value is coming from the above then
    console.log(name)
}).catch(function(error){
    console.log(error)

}).finally(()=>{ console.log("the promise is either resolved or rejected")})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"Demo" ,password : "Demo1234"})
        }
        else{
            reject("There is some problem in the code")
        }
    },2000)
})

async function consumedpromise(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumedpromise()

/*
async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllusers()
*/
//
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        return response.json()
}).then((data)=>{
    console.log(data)
}).catch( (error)=>{
    console.log(error)
})