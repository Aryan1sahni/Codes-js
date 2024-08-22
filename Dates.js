let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,22)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(Math.round(Date.now()/1000))

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday: "long"
})