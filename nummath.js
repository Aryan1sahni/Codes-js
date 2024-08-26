 const score = 400

 const balance = new Number(100)  // when we want what type of data should be stored
 console.log(balance)
 console.log(balance.toString().length)  // convert number to string

 console.log(balance.toFixed(3))  

 const otherNumber = 122.949
 console.log(otherNumber.toPrecision(2))

 const hundreds = 100000000
 console.log(hundreds.toLocaleString('en-In'))


 /////////////////////////   Maths  ////////////////////////

 console.log(Math.abs(-20))
 console.log(Math.round(4.8)) // round off

 console.log(Math.floor(3.8)) // round down
 console.log(Math.ceil(5.3))  // round up

 console.log(Math.random())  // always ranges from 0-1
 console.log(Math.floor(Math.random()*10+1)) // ranges from 1-9 \
 // we used +1 so that 0 does not come because if the value is 0.02 then even after multiplying the value is 0

 // when we want a random value from a range
 const min =10
 const max =20
 
 console.log(Math.floor(Math.random() * (max -min +1) + min))

 