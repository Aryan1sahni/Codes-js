const number = parseInt(Math.round(Math.random()*100+1))

const submit = document.querySelector('#submit')
const guess = document.querySelector('#guessfield')
const message = document.querySelector('.message');
const previous = document.querySelector(".previous")
const remaining = document.querySelector(".remaining")


console.log(number)
let previousguess = []
let numguess = 1
let playgame = true

if(playgame===true){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const valuee = parseInt(guess.value)
        console.log(valuee)
        validate(valuee)
    })
}
function validate(guess){
    if(guess<0 || isNaN(guess || guess <100)){
        alert("Please Enter a valid number")
    }
    else{
        previousguess.push(guess)
        if(numguess === 11){
            displayguess(guess)
            displaymessage("Game Over.")
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === number){
       alert("You guessed it right")
        endgame()
    }
    else {
    alert("Not a right number")
    }
}
function displayguess(guess){
    guess.value =''
    previous.innerHTML +="," + guess
    numguess++
    remaining.innerHTML  = "Remaining Guess"+parseInt(11-numguess)
}
function displaymessage(message){

}

function newgame(){

}
function endgame(){
    
}