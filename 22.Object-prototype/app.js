/*
    Demo : Creating Objects

    ** Dışarıdan name ve salary bilgilerini alan Employee constructor'i tanımlayınız.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu oluşturun.
      Vergi dilimleri
        ** 20.000 'e kadar %20 vergi
        ** 30.000 'e kadar %25 vergi
        ** 30.000 'den sonra %27 vergi
    ** 
*/

function Employee(name,salary){

    // Eğer Gönderilen new ile oluşturulmadıysa bunu bu kodlarla düzeltmiş oluyoruz
    if (!(this instanceof Employee)){
        return new Employee(name,salary)
    }
    // -------------------------------

    this.name=name;
    this.salary=salary;
}

Employee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1
    
    var tax=0;
    var total=this.salary*month;

    if (total<20000) {
        tax = total*0.2;
    }else if (total>20000 && total<30000 ){
        tax = total*0.25
    }else {
        tax = total*0.3
    }
    return {
        total:total,
        tax:tax,                   // tax=tax olmaz "Invalid shorthand property initializer" hatası verir
        paid:total-tax
    }
}

var employee1=Employee("John",3000);
var employee2=new Employee("Selena",4000);
console.log(employee1.calculateSalary());