let box = document.querySelectorAll(".box")
let buttonn = document.querySelector("button")
let reset = document.querySelector(".reset")
const arr =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let player1 = true
let player2 = true
box.forEach( (boxx)=>{
    boxx.addEventListener("click", function(){
        if (boxx.innerHTML === ""){
        if(player1){
            boxx.innerHTML ="X"
            player1=false
            player2=true
        }
        else{
            boxx.innerHTML = "0"
            player2=false
            player1=true
        }
        
        console.log(action())
        
    }
    })
    
})

function clearbox(){
    box.forEach( (clear)=>{
            clear.innerHTML =""
        })

    player1 = true;  
    player2 = false;
}

reset.addEventListener("click" ,clearbox)

function action(){
    for (const element of arr) {
       
       let val1 = box[element[0]].innerHTML
       let val2 = box[element[1]].innerHTML
       let val3 = box[element[2]].innerHTML
       
       if(val1 && val1 === val2 && val2 === val3){
        alert("We have our winner")
        clearbox()
       }
       
    }
}