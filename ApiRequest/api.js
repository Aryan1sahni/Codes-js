const xhr = new XMLHttpRequest()
const requestUrl = 'https://api.github.com/users/aryan1sahni'
xhr.open('GET',requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        // console.log(this.responseText)
        const data = JSON.parse(this.responseText)  // parse converts string to a json
        console.log(data.followers)
    }
}
xhr.send()

 
