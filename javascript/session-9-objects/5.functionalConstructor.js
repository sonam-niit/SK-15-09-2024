//Functional Constructor
function Student(id,name,email){
    this.id=id;
    this.name=name;
    this.email=email;
}
Student.prototype.display=function(){
    console.log('Id: '+this.id);
    console.log('Name: '+this.name);
    console.log('Email: '+this.email);
}
const st1= new Student(1,'alex','alex@gmail.com')
const st2= new Student(2,'bob','bob@gmail.com')
st1.display();
st2.display();
//display function you can call only with object of student constructor

