function getTotal(a,b,c){
return a+b+c;
}

console.log(getTotal(10,50,80));

let numbers=[10,50,80]
//ES5
getTotal.apply(null,numbers)    //apply(object,array)
console.log(getTotal.apply(null,numbers) )

// ES6
console.log(getTotal(...numbers))

let arr1=["two","three"]
let arr2=["one","four","five"]

arr1.push(...arr2);
console.log(arr1)