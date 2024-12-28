const person={
    name:'sonam',
    age:40,
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
        console.log('Age: '+this.age);
    }
}
person.greet();

