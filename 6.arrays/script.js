let names=["helen","ferry","terry","marry"]
let years=[1998,2003,1994,1997]

// Show your arrays
console.log(names);
console.log(names.length)
console.log(years)

// get array item 
console.log(names[0])
console.log(names[3])

// set Array item

names[1]="Henry";
console.log(names)

// add an item as last

names[names.length]="Pierry"

// add item  to end PUSH
years.push(1995);
console.log(years)

// add item to end UNSHIFT
years.unshift(2021);
console.log(years)

// remove item POP

years.pop();
console.log(years)

// indexOf 
console.log("Where is Ferry: "+names.indexOf("terry"))

// reverse 
console.log(names.reverse())

// sort 
console.log(names.sort());
console.log(years.sort())

// concat 
let combination=years.concat(names)
console.log(combination)

// splice

names.splice(2,0,"Freedy")
console.log(names)
console.log(names.splice(0,4))

// find

// filter
// -- a simple function 
function over18(year){
    let age=2021-year;
    return age>=18
}

console.log(over18(1995))
let result=years.find(over18)
console.log(result) // Only one result returns

// To find more than 1 
let filterResult=years.filter(over18)
console.log("Years over 18:"+filterResult)

