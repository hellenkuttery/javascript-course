var str1="Helen"    // Primitive
var str2=new String("Helen")   // Object

console.log(str1)
console.log(typeof(str1))
console.log(str2)
console.log(typeof(str2))


// Object 

var obj1={
    name:"Helen"
}

var obj2=new Object({
    name:"Hellen"
})


// String constructor genişletme
String.prototype.repeat=function(n){
    return new Array(n+1).join(this);
}

console.log("Helen".repeat(3));