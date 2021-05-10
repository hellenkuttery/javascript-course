const btn=document.querySelector("#silmeButonu");
const ultag=document.querySelector(".alt");


// Click event
// btn.addEventListener("click",eventHandler);

// double Click
// btn.addEventListener("dblclick",eventHandler);

// mouse over
// btn.addEventListener("mouseover",eventHandler);

//mouseout
// btn.addEventListener("mouseout",eventHandler);

// mouse move
const h5tag=document.querySelector("h5")
ultag.addEventListener("mousemove",eventHandler)

function eventHandler(event){
    console.log(`event type: ${event.type}`)
    h5tag.textContent=`Mouse X ${event.offsetX} Mouse Y: ${event.offsetY}`
    
}