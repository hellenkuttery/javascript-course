// Document Object Model i anlamak ** Bu kısım müthiş derecede önemli ----

let val;

val=window.document;
val=document.title
val=document.all.length
val=document.all[7]
val=document.head
val=document.scripts[1].getAttribute("src")

console.log(val)

// Selecting Single Elements  - GetElementById

let elem=document.getElementById("header")
elem=document.getElementById("header")
elem.innerHTML="MY NEW APP"
elem.style.fontSize="50px"
elem.style.color="tomato"
elem.style.fontWeight="bold"
elem.onmouseover=function(){
    elem.style.color="blue"
};

elem.onmouseout=function(){
    elem.style.color="tomato"
};
console.log(elem)

// Selecting Single ELements -querySelector
document.querySelector(".content1").innerHTML="hello"
document.querySelector(".content2").innerHTML="I learnt everything about Javascript"

function myfunction(){
    let mytext=document.querySelector(".content1")
    mytext.innerHTML="Değiştimmm"
    mytext.style.color="red"
    mytext.style.fontSize="40px"
    
}

document.querySelector("li:nth-child(1)").style.color="pink"

document.querySelector(".content2").classList.add("text-success")
document.querySelector(".content2").classList.add("border")

// Selecting Multiple ELements -querySelector

let mul=document.getElementsByClassName("list-group-item")[2]

document.querySelector(".text").innerHTML=mul

// Selecting by GetElementByTagName

let tagname=document.getElementsByTagName("li")
console.log(tagname)

// Selecting queryselectorall
let first=document.querySelector(".alt")
console.log(first)
let quer=first.querySelectorAll("li")
console.log(quer)

quer.forEach(function (item){
    item.style.backgroundColor="pink"
})

let chil=first.childNodes
chil=first.childNodes[2]

chil=first.children[2].textContent="my new item"
console.log(chil)

let newVal=first.firstElementChild
console.log(newVal)

newVal.textContent="new Item change"



