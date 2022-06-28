// CALLBACK -PROMISE- ASYC-await

// CALLBACK

console.log("start");

const calbackFunction = (username, password, callback) => {
  setTimeout(() => {
    callback({ username: username });
    console.log("I am in callback,after 2 seconds");
  }, 2000);
};

const username = calbackFunction("Hellen", 123456, (user) => {
  console.log(user);
});


const OtherCallback=(job,phone,call)=>{
 setTimeout(()=>{
    call({job:job,phone:phone})
    console.log("I am in call back-after 1 second")
 },1000)

}
const jobDesc=OtherCallback("engineer",3452333245,call=>{ 
    console.log(call.job,call.phone)
})

console.log("stop");
