// Promise like callback but  what if response is an Error
// (Promiseler callback e benziyor ama hatalı mesaj geldiği kısmı düşünldüğünde promise )
// Server status false verdiğim için hata fonksiyonunu, true verirsen successi çalıştıırır
// console.log("start");

// const serverStatus=false;

// const calbackFunction = (username, password, successFn,error) => {
//       setTimeout(() => {
//         if (serverStatus){
//     successFn({ username: username });
//     console.log("I am in promise,after 2 seconds");}
//     else {
//         error("Hata")
        
//     }
//   }, 2000);
// };

// const username = calbackFunction("Hellen", 123456, (user) => {
//   console.log(user);
// },(error)=>{
//     console.log(error)
// });

// console.log("stop");
// --------------------------

// PROMISELER


const serverStatus=false;

const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
     if (serverStatus){
        resolve({username:"Hello Hellen"})
     }   
     else{
        reject("Server is not available");
     }
    },2000);

    
})

// promise burdan çağırıyoruz. then resolve çalıştırıyor, catch erroru çalıştırıyor
promise.then(user=>{ 
    console.log(user)
}).catch((err)=>{
    console.log(err)
})