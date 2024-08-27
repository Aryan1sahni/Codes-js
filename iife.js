// This is enclosed in bracet because we want it to run on start
(function demo(){
    //Named IIFE
    console.log("DB Connectes")
}) (); // this tells the computer to run the function immediately

( (name)=> {
    console.log("DB Connected ,"+name)
}) ("Joker")