document.querySelector('#images').addEventListener('click',(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName==="IMG"){
    const remove = e.target.parentNode
    remove.remove()
    }
    else{
        
    }
},false)