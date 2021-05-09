const firstname="Hellen"
const lastname="Kuttery"
const age=35;
let val;

// ----Concatanate--------------

val=firstname + " " + lastname;
val="Helen"
val+="Kuttery";

val ="Benim adım "+ firstname + " soyadım "+lastname +
" yaşım "+35;

console.log(val)

console.log(firstname.concat(" ",lastname))
// ----------------Lenght
console.log(val.length)

// Uppercase - LoverCase

console.log(val.toLowerCase())
console.log(val)

console.log(val.toUpperCase())

// - IndexOf------------

console.log(val.indexOf("tery"))
console.log(val.indexOf("p"))  // içinde bu karakter yoksa -1 döner

// Substring (başlangıç ve bitiş)

console.log(val.substring(0,5))

console.log(val.slice(0,5))
console.log(val.slice(5)) // Burda sadece başlangıç değeri verdik.Bu başlangıçtan sonuna kadar

let hobbies="sinema,spor,kitap,gazete"

console.log(hobbies.split(",")) // virgülden tek tek ayırıp dizi olarak yazar

// ===========================
console.log(firstname.replace("H","P"))
// TEMPLETE LITERALS // String içinde değişkenler yerine  ${} kullanmaya denir.

console.log(`my name is ${firstname} and my surname is ${lastname} `)

console.log(`my name is  ${firstname} last name ${lastname}  I am ${(2021-age >= 18 ? 'over 18' : 'under 18')} `) // TEmplete Literal de Ternary operation
