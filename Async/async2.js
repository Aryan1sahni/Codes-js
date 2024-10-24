const say = function(str){
    console.log(str)
}

let intervalId;


document.querySelector('#start').addEventListener('click',function(){
   intervalId = setInterval(say,1000,"Hello")
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId)
})

