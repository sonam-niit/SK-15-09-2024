class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    //add node at the end (last)
    append(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode
    }
    //add node at beggining
    prepend(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=this.tail=newNode;
            return;
        }
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
    }
    //insert after some specific value
    insertAfter(target,value){
        let curr= this.head;
        while(curr && curr.value!==target){
            curr=curr.next
        }
        if(!curr) return
        const newNode= new Node(value);
        newNode.next=curr.next;
        newNode.prev=curr;
        if(curr.next){
            curr.next.prev=newNode;
        }else{
            this.tail=newNode;
        }
        curr.next=newNode;
    }
    //print from head to tail
    printForward(){
        let curr= this.head;
        let result=''
        while(curr){
            result+= curr.value+' ⇆ '
            curr=curr.next
        }
        console.log('Forward: ',result.slice(0,-3))
    }
    //print from tail to head
    printBackward(){
        let curr= this.tail;
        let result=''
        while(curr){
            result+= curr.value+' ⇆ '
            curr=curr.prev
        }
        console.log('Backward: ',result.slice(0,-3))
    }
    delete(value){
        let curr=this.head;
        while(curr&&curr.value!==value){
            curr=curr.next;
        }
        if(!curr) return //this for not found node
        if(curr.prev){
            curr.prev.next=curr.next 
            //delete any middle node and adjust its next
        }else{
            this.head=curr.next //if deleting first node
        }

        if(curr.next){
            curr.next.prev=curr.prev
            //delete any middle node and adjust its prev

        }else{
            this.tail=curr.prev //if deleting last node
        }
    }
}

let dll= new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);
dll.insertAfter(20,25);
dll.printForward();//original 
dll.printBackward()//original
dll.delete(10);
dll.printForward()
dll.delete(5);
dll.printForward()
dll.delete(30);
dll.printForward()