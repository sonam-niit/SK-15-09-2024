class Student{
    constructor(id,name,address,country){
        this.id = id;
        this.name = name;
        this.address = address;
        this.country = country;
    }

    getDetails(){
        console.log('-------------------------------------------');
        console.log(`Id: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Address: ${this.address}`)
        console.log(`Country: ${this.country}`)
    }
}

const s1= new Student(1,'Alex','XYZ..','US')
const s2= new Student(2,'Bob','PQR..','UK')
const s3= new Student(3,'Catty','ABC..','INDIA')

s1.getDetails()
s2.getDetails()
s3.getDetails()