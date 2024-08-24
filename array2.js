const marvel_heros =["SpiderMAn","IronMan","CaptainAmerica","Hulk"]
const dc_heros=["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros) // it treats array as an single element
//console.log(marvel_heros)
/*
const allheros =marvel_heros.concat(dc_heros) // Gives same as push method
console.log(allheros)
*/
const allnewheros = [...marvel_heros,...dc_heros]  // this will do the same as concat but this is called spread operator as it is spreading the elements in array seperately 
console.log(allnewheros)

const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usablearray = anotherarray.flat(Infinity)
console.log(usablearray)

console.log(Array.isArray("Joker"))
console.log(Array.from("Joker")) // This will convert any type to an array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))