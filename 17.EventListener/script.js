const silme=document.querySelector("#silmeButonu")

console.log(silme)

silme.addEventListener('click',function btnClick(e)
{   let val=e
    val=e.target.id
    val=e.target.classList
    console.log(val)

    
    console.log("butonun basıldı")
})
