// console.log(Math.PI)
const PI = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(PI)

const joker ={
    name : "Joker",
    age : "42",
    Isavalable :true
}

Object.defineProperty(joker,"name" ,{ 
  writable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(joker, "name"))

for (let [key , value] of Object.entries(joker)) {
    console.log(key +" : " + value)
}