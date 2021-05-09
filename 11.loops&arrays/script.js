// Loops in Array : Dizi içindeki verileri alabilmek için 
let cars=["Bmw","Mercedes","Toyota"];
let people=[
    {firstname:"Hellen",lastname:"Kuttery"},
    {firstname:"Kuetty",lastname:"Kuttery"},
    {firstname:"Setty",lastname:"Kuttery"},
]

// 1. yöntemimiz for döngüsü
for (let i=0; i<cars.length; i++){
    console.log(cars[i])
}

// 2. yöntemimiz  for - in 

for (let i in cars){
    console.log(`index ${i} value:${cars[i]}`)
}
console.log(typeof cars)

// foreach

cars.forEach(function(item){
    console.log(item)
})


/// for Objects

for (let i in people){
    console.log(`index ${i}. firstname ${people[i].firstname}`)

}
// forEach for objects
people.forEach(function(item){
    console.log(`firstname ${item.firstname}`)
})

// bu bilgiye geri ihtiyacım olsa bir array olarak geri almak istiyorsam

let mynewArray=people.map(function(item){
    return item.firstname+" "+item.lastname
})
console.log(mynewArray)