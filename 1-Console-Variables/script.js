// -------CONSOLE KULLLANIMI------------
console.log("12345");
console.log([1,2,3,4])
console.error("hata oluştu");
console.warn("bu bir uyarı kutusu");
console.clear();
// --------------

// --------------Değişkenler--------------
var age;
console.log(age)
var age=25
console.log(age)
var name="Hellen"
console.log(name)

name="Hellen Kuttery"
console.log(name)

// Değişken tanımlama Kuralları
// Harf duyarlılığı var, başta _ kullanılabilir

var fullname="hellen Kuttery"
var FullName="perry Kuttery"
console.log(fullname,FullName)

// var,let,const
let city="Kocaeli"   // Let scoope içinde kullanıldığına global olark kullanılamaz
console.log(city)

const email="abc@gmail.com"
console.log(email)  
// const ile verilen değeri değiştirmek istemediğim değişkenler oluşturmak için kullanılır
// email="xyz@gmail.com"
// console.log(email)
// Bu şekilde değişiklik yapıldığında  "script.js:34 Uncaught TypeError: Assignment to constant variable." hatası alınır

// ----------------------------------

// -------------Değişken Tipleri ------------------
// Primitive and Reference Tipleri vardır

// Primitive Tipler:string,number,boolean,null, undefined

let firstname="Zack Kuttery";
console.log(firstname);
console.log(typeof firstname)

let ageGroup=25;
console.log(age);
console.log(typeof age)

let money=400.50
console.log(money);
console.log(typeof money);

let isActive=true;
console.log(isActive);
console.log(typeof isActive);

let job=null // null typeof ile gelen bir deği. ama primitive tiplerden olarak ele alınıyor

// REFERENCE TYPE değişkenler : Array, Object tip olarak object iken function- function döner.
//------- ARRAY -----
let names=["Hellen","Perry","Katty"]
console.log(names)
console.log(typeof names)

// ------------OBJECT-------------
let address={
    city:"Ankara",
    country:"Turkey"
}
console.log(address)
console.log(typeof address)

// -------------FUNCTION-----------

var calculateAge=function(){
    return 30;
}

console.log(typeof calculateAge)