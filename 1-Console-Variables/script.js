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

// ---- TIP DONUŞUMLERİ------------
// string bir değişkeni Number değişkenine dönüştürme
let num1="20";
let num2="10";
console.log(num1+num2)
console.log(typeof num1)

let num3=Number(num1)
let num4=Number(num2)
console.log(num3+num4)
console.log(typeof num3)

// Number değişkenini Stringe dönüştürme 2 yöntem String(variable) 2. variable.toString
let val
val=String(10)
console.log(val)
console.log(typeof val)
// toString
let val1=25
val2=val1.toString()
console.log(typeof val2)
// -- date

let myDate=new Date()
console.log(myDate)
console.log(myDate.getFullYear())

//   NOTES ---------

let myValue
myValue=Number(true) // 1 e karşılık gelir
myValue=Number(false)  // 0 a karşılık gelir
myValue=Number(null)   //  0 
myValue=Number("a")     // NaN Not a number 
myValue=Number([1,2,3])   // NaN 

console.log(myValue)

//  PARSEINT & PARSEFLOAT

myValue=parseInt(10.55)
console.log(myValue)
myValue=parseFloat(10.55)
console.log(myValue)