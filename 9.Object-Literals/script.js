// Object Literals

let val;
let person={
   firstname:"Hellen",
   lastname:"Kuttery",
   birth:1987,
   hobbies:["art","music"],   // object içinde Dizi
   address:{                  // Object içinde başka bir object
      city:"Ankara",
      country:"Türkiye"
   },
   getBirthYear:function(){            // Object içinde function
      let myyear=new Date()      
      return myyear.getFullYear()-this.birth
   }             

}

console.log(person.birth)
let name=person["firstname"]
console.log(name);
console.log(person.hobbies)
console.log(person.address)
console.log(person.getBirthYear())

//-----------PEOPLE

let people=[
   {firstname:"Hellen",lastname:"Kuttery"},
   {firstname:"Fierry",lastname:"Kuttery"},
   {firstname:"Perry",lastname:"Kuttery"}
]
console.log(people[1])

// reach the object item 
for (let i=0; i<people.length; i++) {
   console.log(people[i].firstname)
}