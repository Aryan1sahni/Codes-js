const buttonn = document.getElementsByClassName("box")
let result = document.querySelector('.input')
let str =""
let final
for (let i = 0; i < buttonn.length; i++) {
    buttonn[i].addEventListener('click', (e)=>{
        if(e.target.textContent === "="){
            str =eval(str)
            result.value = str
        
           
        }
        else if(e.target.textContent === "AC"){
            str=""
            result.value = ""
        }
        else{
        let num = e.target.textContent
        str = str + num
        console.log(str)
        result.value = str
    }
        
    })
    
}

