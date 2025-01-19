class Person{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    getDetails(){
        console.log('Name: '+this.name);
        console.log('Address: '+this.address);
    }
}

class Employee extends Person{
    constructor(name,address,empId,dept,salary){
        super(name,address); //call parent class constructor
        this.empId=empId;
        this.dept=dept;
        this.salary=salary;
    }
    getDetails(){
        super.getDetails(); //calling parent get Details method
        console.log('Employee Id: '+this.empId);
        console.log('Department: '+this.dept);
        console.log('Salary: '+this.salary);
    }
}

const e1= new Employee('sonam','mumbai','E000123','I.T.','123456789');
e1.getDetails();