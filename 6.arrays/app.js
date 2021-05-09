// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var arr = ["Bmw","Merdeces","Opel","Mazda"];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

console.log(arr)

// Dizi kaç elemanlıdır ?
console.log("the lenght of arr:"+arr.length)

// Dizinin ilk ve son elemanı nedir ?
let last=arr.length-1
console.log(arr[0],arr[last])

// "Renault" değerini dizinin sonuna ekleyin.
// arr[4] = "Renault";
arr[arr.length]="Renault"
console.log(arr)

arr.push("Hundai")
arr.push("Seat")
console.log(arr)
// "Toyota" değerini dizinin başına ekleyin.
arr.unshift("Toyota")
console.log(arr)
// "Seat" değerini siliniz.
arr.pop()
console.log(arr)


// "Toyota" değerini siliniz.
arr.shift()
console.log(arr)

// Dizi elemanlarını ters çevirin
console.log(arr.reverse())

// Dizi elemanlarını alfabetik olarak sıralayın.
console.log(arr.sort())

// [1,2,5,80] dizisini sıralayın.
let num=[1,2,5,80] 
console.log(num.sort())




// "Opel" değeri dizinin bir elemanımıdır ?
console.log("Dizide opel var mı:"+arr.includes("Opel"))

// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
var str = "Chevrolet,Dacia";
let arr2=str.split(",")
console.log(arr2)


// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

let arrLast=arr.concat(arr2)
console.log(arrLast)

// Oluşturulan diziden son 2 elemanı siliniz.
arrLast.splice(arrLast.length-2)
console.log(arrLast)
// console.log(arr3.pop());
// console.log(arr3.pop());

// console.log(arr3.splice(6,2));


/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

let studentA=["Hellen", "Kuttery",1987]
let studentB=["Feryy", "Kuttery",2003]
let studentC=["Terry", "Kuttery",2010]

console.log(studentA,studentB,studentC)

let students=[studentA,studentB,studentC]
console.log(students)
