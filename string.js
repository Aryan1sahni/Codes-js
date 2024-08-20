const name ="joker"
const repoCount =100

console.log("Hello my name is "+name + "and the count of the repo is "+repoCount)

const gameName = new String('hacker-trod') // another way to create a string
console.log(gameName[0])

console.log(gameName.charAt(3))
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString)

// const anotherString = gameName.slice(-1,4)
// console.log(anotherString)

const newStringone = "          hello joker"
console.log(newStringone.trim())

const url = "https://joker.com/joker%100"
const correcturl = url.replace('%100','-')
console.log(correcturl)
console.log(correcturl.includes('.com'))

console.log(gameName.split('-'))