
// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)




// Bu değerler için sabit tanımlarız.
const kgCan=60;
const kgAda=40;

const heightCan=1.70;
const heightAda=1.50
 // indexler için let ile tanımlarız
 let indexAda;
 let indexCan;
 indexAda=(kgAda) / (heightAda * heightAda)
 indexCan=(kgCan) / (heightCan*heightCan)

 console.log(indexAda,indexCan)

 // *** to.fixed  kesirli kısmın kaç basamak olacağının ayarlanması
 // ƒ toFixed() { [native code] } hatası kodda bir yerlerde eksiklik yaptığının göstergesi
 
 console.log(indexAda.toFixed(2), indexCan.toFixed(2))
 //İf kullanmadan karşılaştırmalar yaptırmak


 let AdaindexQuery=indexAda>indexCan;

 console.log("Ada'nın kilo indexsi canın kile indexinden büyük mü ?:" +AdaindexQuery);

 let AdaPosition=(indexAda<0) && (indexAda<18.4)
 console.log("Ada zayıf:"+AdaPosition)