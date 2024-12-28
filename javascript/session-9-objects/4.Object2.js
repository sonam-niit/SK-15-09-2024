const employee= new Object(); //empty object {}
employee.name='John Doe';
employee.salary=89900
employee.department='Sales'
employee.empId='E0001'
// console.log(employee);
employee.display= function(){
    console.log(`Name: ${this.name}`);
    console.log(`Salary: ${this.salary}`);
    console.log(`Department: ${this.department}`);
    console.log(`Employee Id: ${this.empId}`);
}
employee.display()