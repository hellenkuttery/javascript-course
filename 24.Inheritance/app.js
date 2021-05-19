// There is a Person Object

// From that Object , we will create Student  and  Teacher ( And a HEadmaster from teacher)

// Create Person Object

function Person(name){
    this.name=name;
}

Person.prototype.Introduce=function(){
    console.log("Hello my name is" , this.name)
}

let p1=new Person("Helen")
p1.Introduce();

// Inherit Student From Person and add number to student and a constructor to it.

function Student(name,number){
    Person.call(this,name)
    this.number=number
}


Student.prototype=Object.create(Person.prototype)
Student.prototype.constructor=Student;

Student.prototype.sayNumber=function(){
    console.log("My number is " ,+this.number);
}

let s1=new Student("Terry",123);
s1.Introduce();
s1.sayNumber();

// Inherit Teacher from Person 

function Teacher(name,branch){
    Person.call(this,name)
    this.branch=branch;
}

Teacher.prototype=Object.create(Person.prototype)
Teacher.prototype.constructor=Teacher;
Teacher.prototype.sayBranch=function(){
    console.log("My branch is ",this.branch)
}
 let t1=new Teacher("Raymond","HTML-CSS")
 t1.Introduce();
 t1.sayBranch();

 // Inherit Headmaster from Teacher

function Headmaster(name,branch,staffWork){
    Teacher.call(this,name,branch)
    this.staffWork=staffWork;
}

Headmaster.prototype=Object.create(Teacher.prototype)
Headmaster.prototype.constructor=Headmaster;

Headmaster.prototype.shareTask= function(){
    console.log("I have already sent the work")
}

let h1=new Headmaster("Headmaster","math","work_finished")
h1.Introduce();
h1.sayBranch();
h1.shareTask();