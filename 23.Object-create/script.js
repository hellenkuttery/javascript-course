// prototypal Inheritance

function Person(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
 
}
Person.prototype.calcaulateAge=function(){
     return 2021-this.yearOfBirth;
}

let Teacher=function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}

// This part is very important.We should equal to teacher's proto to person's proto.
// Then asssign teacher to teachers proto contructor

Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

// -----------------------------------------

let cwTeachers=new Teacher("herry",1994,"teacher","HTML-CSS");
let helen=new Teacher("helen",1984,"teacher","HTML-CSS");
console.log(helen.calcaulateAge())

