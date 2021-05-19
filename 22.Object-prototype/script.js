// Object prototype

function Person(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
  

}
Person.prototype.calcaulateAge=function(){
     return 2021-this.yearOfBirth;
}
const helen=new Person("Helen",1984,"teacher")
console.log(helen.calcaulateAge())