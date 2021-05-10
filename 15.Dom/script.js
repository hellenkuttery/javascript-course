// Document Object Model i anlamak

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

// Selecting multiple  ELements
document.querySelector(".content1").innerHTML="hello"
document.querySelector(".content2").innerHTML="I learnt everything about Javascript"

function myfunction(){
    let mytext=document.querySelector(".content1")
    mytext.innerHTML="Değiştimmm"
    mytext.style.color="red"
    mytext.style.fontSize="40px"
    
}