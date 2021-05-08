let val;
val=parseInt("10a")  // 10
val=parseInt("a10a") // not a number

console.log(val)
console.log(typeof val)

let num=10.4563
console.log(num.toFixed(2))      // toFixed kesirden sonra kaç basamak
console.log(num.toPrecision(3)) // Precision baştan itibaren kaç basamak

val=Math.PI;
console.log("Pi:"+val)

val=Math.ceil(2.87)  // üste yuvarlama işlemi yapılıyor
console.log(val)

console.log(Math.floor(3.768)) // aşağı yuvarlama

// --------------- EXAMPLES
var mynum = 15.123456789;

// toplamda 3 basamaklı sayı kullan

console.log(mynum.toPrecision(3))
// ondalık kısmı 3 basamakta sınırla
console.log(mynum.toFixed(2));

// en yakın sayıya yuvarla
console.log(Math.round(mynum));

// aşağı yuvarla
console.log(Math.ceil(mynum))

// yukarı yuvarla
console.log(Math.floor(mynum))

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul
console.log(Math.min(1,2,10,56,20))
console.log(Math.max(1,2,10,56,20))

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
let min=50;
let max=100;

console.log(Math.floor(min+Math.random()*max))  // Max a kadar bir sayı üretir. min+ yaparsanız 150 aralığına kadar

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

let maas;
let brut=3700;
let mesai=10.3;

maas=brut+(mesai*42)
console.log(maas)
// ----------

brut=brut- (brut* 0.25);
console.log(brut+(mesai*42))

