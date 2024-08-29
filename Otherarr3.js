const num = [1,2,3,4,5,6,7,8,9,10]
const newnum =num.map( (item)=>{
    return item+10
})
//console.log(newnum)

const neww =[]
num .forEach( (item)=>{
    neww.push(item+1)
})
// console.log(neww)

const arr=[1,2,3,4,5,6,7,8,9,10]
const newar = arr.map( (num)=>{
    return num *10}).map( (num)=>{
        return num +1
    }).filter( (num)=>{
        return num > 40
    })
console.log(newar)