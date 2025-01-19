class Parent {
    print() {
        console.log('Hello From Parent Class')
    }
}
class Child extends Parent {
    test(age) {
        if (age >= 18)
            console.log('Valid for vote');
        else
            console.log('invalid User');
    }
}

const c1= new Child();
c1.print(); //child can access parent class method
c1.test(); //child can access its own method