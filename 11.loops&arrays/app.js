/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var number=Math.random()*100; // Math.random normalde 0-1 arasında bir sayı üretir.
let times=5;
let guessing;
let sayac=1;

console.log("sayi:"+number.toFixed(0))

while(times>0){

    times--;
    sayac++;
 
    guesNumber=Number(prompt("Bir sayı girin"));
    if (number == guesNumber){
        console.log(`Tebrikler ${sayac} defada bildiniz`)
        console.log(`puan : ${100 - (20)*sayac-1}`)
        break;
    }
    else if (number<guesNumber){
        console.log("aşağı")
    }
    else {
        console.log("yukarı")
    }

}

