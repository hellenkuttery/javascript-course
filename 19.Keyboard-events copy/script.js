// Keyboard Events

const myinput=document.querySelector("#myinput")

// myinput.addEventListener("keydown",eventHandler)

// function eventHandler(event){
// console.log(`event type ${event.type}`)
// console.log(`key code ${event.keyCode}`)
// }

myinput.addEventListener("focus",eventHandler)

function eventHandler(e){
    e.target.style.backgroundColor="yellow"
    console.log()
}

// focus select 