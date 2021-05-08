// Date Object

// Native code hatası : zerinde cali$tigi cpu'nun makine dilinde olan koda native code denir.. Çözümü parantez unutulmuştur. getDate()


// Date object Get Methods. Aşağıdakiler Get methodlarıdır.
let myDate= new Date();

console.log(myDate)
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear())

// SET methodları => Tarih saat,dakika s bilgilerini manuel olarak değiştiriyoruz.

myDate.setFullYear(2020);
console.log(myDate)

// EXAMPLE

let birthday=new Date(1990,1,5)
console.log("Şu anki yaş:"+(myDate.getFullYear()-birthday.getFullYear()));