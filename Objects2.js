// Object (Singletion or we can say using constructor)
const tinderUser = new Object() 

tinderUser.name = "Joker"
tinderUser.email = "demo@gmail.com"
tinderUser.IsloggedIn=true

console.log(tinderUser)

const regularUser ={
    email : "name@gmail.com",
    fullname : {
        userfullname :{
            firstname :"Hacker",
            lastname  :"Trod"
        }
    }
}
console.log(regularUser.fullname?.userfullname)            // we use ? to check whether there is full name  or not

const obj1 ={1:"a",
             2:"b"
}
const obj2={3:"c",
            4:"d"
}
/*
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3)
*/

const obj3 = {...obj1,...obj2}
const arr =[
            {
                username:"joker123",
                password:" 12434"
            },
            true
]
console.log(arr[0]);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // key value to array

console.log(tinderUser.hasOwnProperty('name'))

