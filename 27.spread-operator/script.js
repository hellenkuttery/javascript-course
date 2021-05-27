// Arrow functions
// with ES5

let welcomeES5=function(){
    console.log("Hello from ES5")
}

welcomeES5()

// With ES6
let welcomeES6 =()=>{console.log("Hello from ES6")}
welcomeES6();

// with ES5 with parameters

let multiplyES5=function(x,y){
    return x*y;
}

console.log(multiplyES5(10,50))

// with ES6 with parmeters

let multiplyES6=(x,y)=>x*y
let multiplyParanthesis=(x,y)=>{ return x*y} // Güzel parantezler kulllanılacaksa return yazılmalıdır.
console.log(multiplyES6(10,50))

// Examples
let splitES6=(text)=>text.split("/ ")
console.log(splitES6("Javascript course"))

//Object Literals
let getProductES5=function(id,name){
    return{
        id:id,
        name:name
    }
}
console.log(getProductES5("34524","mobile phone"))
//ES6

let getProductES6=(id,name)=>({ id:id, name:name})

// ----------- Array

const phones=[
    {name:"Iphone 8",price:3000},
    {name:"Iphone 7",price:2000},
    {name:"Iphone 6",price:2000},
    {name:"Iphone 3",price:1000}
]

let pricesES5=phones.map(function(phone){
    return phone.price;
})

console.log(pricesES5)

//ES6
let pricesES6=phones.map(phone=>{return phone.name})
console.log(pricesES6)


//ES5 filter

const arr=[1,2,4,5,6,7,12,15,46,80]

let evenES5=arr.filter(function(even){
    return even %2==0
})

console.log(evenES5)

// ES& filter

let evenES6=arr.filter(even=>even%2==0)
console.log(evenES6)