class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedListQueue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0;
    }
    enqueue(value){
        const newNode= new Node(value);
        if(this.isEmpty()){
            this.front=this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
        this.length++;
    }
    dequeue(){
        if(this.isEmpty())
            return "Queue is Empty";
        const removeValue= this.front.value;
        this.front=this.front.next;
        if(!this.front)
            this.rear=null;
        this.length--;
        return removeValue;
    }
    isEmpty(){
        return this.length===0;
    }
    print(){
        let result=[];
        let curr=this.front;
        while(curr){
            result.push(curr.value);
            curr=curr.next
        }
        console.log(result.join(" <- "));
    }
    size(){
        return this.length;
    }
    peek(){
        return this.isEmpty()? "Queue is Empty":this.front.value
    }
}

const queue= new LinkedListQueue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.print()
console.log('Dequeued: ',queue.dequeue());
queue.print();
console.log('Peek: ',queue.peek());
console.log('Size: ',queue.size())
console.log('Dequeued: ',queue.dequeue());
console.log('Dequeued: ',queue.dequeue());
console.log('Peek: ',queue.peek());