for (let i = 0; i <10; i++) {
    if(i==5){
        console.log("5 is best number")
    }
    console.log(i)
}

console.log("-----------")

const array = [1,2,3,4,5]
for (let index = 0; index <= array.length; index++) {
    const element = array[index];
    console.log(element)
}   

for(let i =0; i<10; i++){
    for(let j=0;j<10;j++){
        console.log(i+" "+j)
    }
}

for(let i =1;i<=20;i++){
    if(i==5){
        console.log("5 is Detected")
        break;
    }
    console.log("value of i is "+i)
}

for(let i =1;i<=20;i++){
    if(i==5){
        console.log("5 is Detected")
        continue;
    }
    console.log("value of i is "+i)
}