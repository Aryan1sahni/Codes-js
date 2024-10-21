// Event in javascipt are run sequentially

/*
This is one of the way to achieve this  
document.getElementById('dog').onclick = function (){
     alert("Dog Clicked")
}
*/
// This is another way to click and perform some task
document.getElementById('dog').addEventListener('click',function(e){
    console.log("Dog is clicked")
    e.stopPropagation() // this method should be used when we do not want bubling to happen
},true)

document.getElementById('images').addEventListener('click',(e)=>{
    console.log("cliked inside ui element")
},true)

// bottom to top li to ul (bubling) - setting it to false
// top to bottom ul to li  - setting it to true

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("google clicked")
})