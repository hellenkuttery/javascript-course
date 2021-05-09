// Demo : Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = " https://clarusway.com/ bootcamp for everyone sızı gelıstırır";

// cümle kaç karakterlidir ?
console.log(sentence.length)

// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(" "));

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim())

// '-' karakterini silin.
console.log(sentence.replace("-"," *"))

// url'nin içinden str kısmını çıkarınız.
let str="https://"
console.log(url.slice(str.length))
console.log(url.substring(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)

console.log("url http kullanıyor mu? : "+url.indexOf("http"))
console.log("url https kullanıyor mu? :"+url.includes("https"))
console.log("url https kullanıyor mu? :"+url.trim().startsWith("https"))

// url, '.com' ifadesini içeriyor mu?
console.log("url com ifadesi içeriyor mu? :"+url.includes(".com"))

// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.trim().toLowerCase().replace(/ /g,"-").replace(/ı/g,"i"))
  // iki // arasına yazılan karakteri cümle içinde bulur.

