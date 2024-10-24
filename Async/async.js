const sayhello =function(){
    console.log("Hello Everyone")
}
setTimeout(sayhello,2000)

const changetext = function(){
    document.querySelector('h1').innerHTML ="Say Hello"
}
const changeMe=setTimeout(changetext,2000)

const stop = document.getElementById('stop').addEventListener('click',function(){
    clearTimeout(changeMe)   // if this is clicked before 2000 then the text will not change
})