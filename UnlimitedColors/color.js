const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    
    for(let i = 0 ; i<6;i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalid 
console.log(randomcolor())

const change = function change(){
    document.body.style.backgroundColor = randomcolor()
}
const startchangingcolor =function(){
    if(intervalid == null){
        intervalid= setInterval(change,1000)
    }

}

const stopchangingcolor = function(){
    clearInterval(intervalid)
    intervalid = null
}

document.querySelector('#start').addEventListener('click',startchangingcolor)


document.querySelector('#stop').addEventListener('click',stopchangingcolor)