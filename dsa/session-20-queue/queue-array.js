class Queue{
    constructor(){
        this.items=[]
    }
    //add element at rear end
    enqueue(element){
        this.items.push(element);
    }
    //Remove element from front end
    dequeue(){
        if(this.isEmpty())
            return "Queue is Empty"
        return this.items.shift();
    }
    //view front item
    peek(){
        if(this.isEmpty())
            return "Queue is Empty"
        return this.items[0];
    }
    //check if queue is Empty
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.join(" <- "));
    }
}
const queue= new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.print();
console.log('Dequeued: ',queue.dequeue())
console.log('Peek: ',queue.peek())
console.log('Is Empty: ',queue.isEmpty())
console.log('Size of queue: ',queue.size())
queue.print()
console.log('Dequeued: ',queue.dequeue())
console.log('Dequeued: ',queue.dequeue())
console.log('Dequeued: ',queue.dequeue())