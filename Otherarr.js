const arr =[1,2,3,4,5]
// Another type of array(forof)
for (const element of arr) {
    console.log(element)
}

const greeting =["Hello","HI","Hey"]

//Map
const map = new Map() // it is collection of key value pairs and they are unique values
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map)


for (const [key,value] of map) {
    console.log(key + " " +value)
}

/*
const myobj ={
    game1 : "red dead redemption",       Objects are not iterable
    game2 : "gtaV",
    game3 :"SpiderMan"
}
for (const g of myobj) {
    console.log(g)
}
    */

const myobj ={
    game1 : "red dead redemption",
    game2 : "SpiderMan",
    game3 : "GTAV"
}
//forin
for (const key in myobj) {
    console.log(key + ":"+myobj[key])
}

const names =["joker","hacker","demo1","demo2"]
for (const key in names) {
   console.log(key + " " +names[key] )
}

const ma = new Map()
ma.set('1',"Joker")
ma.set('2',"Hacker")

for (const key in ma) {
    console.log(key)
}

const heros = ["batman","Superman","flash","Aquaman"]
// in for each it is expecting a callback function , hence a callback function does not have a name and we have to name the parameter
heros.forEach(function(items){
    console.log(items)
})

heros.forEach((name)=>{
    console.log(name)
})

function printMe(name){
    console.log(name)
}
heros.forEach(printMe) // we have to pass the reference not the function ()

heros.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})

const myar = [
    {
        name:"Demo",
        file : "DemoFile"
    },
    {
        name : "Demo1",
        file : "Demo1File",

    },
    {
        name :  "Demo3",
        file : "Demo3File"
    }
]

myar.forEach( (item)=>{     // we have access of the object
    console.log(item.name)
})