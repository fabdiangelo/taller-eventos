const div = document.getElementById("container")
const button = document.getElementById("button")
let onButton = false

button.addEventListener("mouseover", () => {onButton = true})
button.addEventListener("mouseleave", () => {onButton = false})
div.addEventListener("click", saludo)

function saludo(){
    console.log(onButton)
    
    if(!onButton){
        alert("Hola! Soy el div")
    }
}