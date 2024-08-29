const mynums = [1,2,3,4,5]

const mytotal = mynums.reduce( (acc,curval)=>{
    console.log("Accumulator :"+acc +" Current Value :" + curval)
    return acc + curval
},0) // this is the value of the accumulator

console.log(mytotal)


const ShoppingCart =[
    {
        itemName :"Course1",
        price :1
    },
    {
        itemName :"Course2",
        price :2
    },
    {
        itemName :"Course3",
        price :3
    },
    {
        itemName :"Course4",
        price :4
    }
]

const add =ShoppingCart.reduce( (acc,item)=>{
    return item.price +acc
},0)

console.log(add)