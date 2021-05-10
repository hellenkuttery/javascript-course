const newItem=document.createElement("li")
newItem.className="list-group-item"
newItem.textContent="item 4 this is new"
newItem.innerHTML="item 4 this is new"

// new item a  attribute eklenebilir

const atag=document.createElement("a")
atag.setAttribute("href","#")
console.log(newItem)

// appendChild li to a
atag.appendChild(newItem)

// appendChild a to ul 
let myItem=document.querySelector(".alt").appendChild(atag)
console.log(myItem)

// Deleting  an item
let x=document.getElementsByClassName("alt")

console.log(x)

