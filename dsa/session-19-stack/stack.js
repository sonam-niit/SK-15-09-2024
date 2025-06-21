class Stack{
    constructor(){
        this.items=[]; //by default its empty array
    }
    //add element
    push(element){
        if(this.items.length==5)
            return console.log('stack overflow')
        this.items.push(element)
    }
    //remove
    pop(){
        if(this.isEmpty())
            return "Stack is underflow"
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length===0;
    }
    //return top element (just see)
    peek(){
        return this.items[this.size()-1]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.join(' '))
    }
}
const coinStack= new Stack();
coinStack.push(20);
coinStack.push(10);
coinStack.push(5);
coinStack.push(2);
coinStack.push(1);
coinStack.push(20);
coinStack.print()
console.log('view top ele: ', coinStack.peek())
console.log('pop: ', coinStack.pop())
console.log('size: ',coinStack.size())
console.log('pop: ', coinStack.pop())
console.log('pop: ', coinStack.pop())
console.log('pop: ', coinStack.pop())
console.log('pop: ', coinStack.pop())
console.log('pop: ', coinStack.pop())