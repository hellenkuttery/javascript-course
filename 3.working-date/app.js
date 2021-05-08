// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
// iki tarih arasındaki geçen zamanı bulunuz.
// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

// ** Yaş hesaplama nasıl yapılır ?
// console.log(birthday.getTime());
// console.log(Date.now())
//--------------------------------------------
// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let myday=new Date();
console.log("Day:"+myday.getDay());
console.log("Month:"+myday.getMonth())
console.log("Year:"+myday.getFullYear())

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
let myNewDate=new Date("8/24/2010");
console.log(myNewDate)
console.log("Day:"+myNewDate.getDay());
console.log("Month:"+myNewDate.getMonth())
console.log("Year:"+myNewDate.getFullYear())
// 1/1/1990 tarihinden bir gün öncesini gösteriniz.

let dateTime=new Date("1/1/2020");
console.log("Date:"+dateTime);
let beforeDay=(dateTime.getFullYear()-1)
console.log("before date:"+beforeDay)
// iki tarih arasındaki geçen zamanı bulunuz.
let start=new Date("1/1/2011");
let end=new Date("5/8/2021");

let difference=end-start;
console.log("Miliseconds:"+difference);
console.log("Seconds:"+difference/1000);
console.log("minutes:"+(difference/1000)/60);
console.log("hours:"+((difference/1000)/60)/60);
console.log("Days:"+((((difference/1000)/60)/60)/24).toFixed(0));

// ** Yaş hesaplama nasıl yapılır ?
let birthday=new Date("5/3/2011")
let ageDifMs=Date.now()-birthday.getTime()  // date.now bugünün tarihini ms cinsinden verir.
let AgeDifference=new Date(ageDifMs);
console.log(AgeDifference.getFullYear()-1970); // Tarih hesaplamalrı 1970den başladığı için bu aradaki farktan 1970i çıkartarak yaşı bulduk


// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

let annelerGunu=new Date();
console.log(annelerGunu)
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
console.log(annelerGunu.setFullYear(2019));
console.log(annelerGunu.setDate(1))  // Günü Mayısın 1.ine eşitledik
console.log(annelerGunu.setMonth(4)) // Ay Mayıs ayına eşitledik.dizi old. için Ocak ayı =0 

while (annelerGunu.getDay() !=0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
console.log(annelerGunu)
annelerGunu.setDate(annelerGunu.getDate()+7)
console.log(annelerGunu)
// --------------


