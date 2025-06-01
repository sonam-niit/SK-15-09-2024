class Node{
    constructor(data){
        this.data=data
        this.next=null //by default next pointer is null
    }
}

class LinkedList{
    constructor(){
        this.head=null //when you create blank linkedlist head is null
        this.size=0 //track size
    }
    //O(1)
    insertAtStart(data){
        const newNode= new Node(data);
        newNode.next=this.head
        this.head=newNode
        this.size++
    }
    //O(n)
    insertAtEnd(data){
        const newNode= new Node(data);
        if(!this.head){
            this.head=newNode
        }else{
            let curr= this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }
    //O(n)
    insertAtIndex(data,index){
        if(index<0 || index>this.size)
            return console.log('Invalid Index')
        if(index===0){
            this.insertAtStart(data);
            return;
        }
        const newNode= new Node(data)
        let curr = this.head
        let pre;
        let count=0;
        while(count<index){
            pre=curr
            curr=curr.next
            count++;
        }
        newNode.next=curr
        pre.next=newNode
        this.size++;
    }
    traverse(){
        let curr= this.head
        while(curr!=null){
            console.log(curr.data)
            curr= curr.next
        }
    }
    removeAtIndex(index){
        if(index<0 || index>= this.size)
            return console.log('Invalid Index')
        let curr= this.head
        let pre;
        let count=0
        if(index===0){
            this.head=curr.next
        }else{
            while(count<index){
                pre=curr;
                curr=curr.next;
                count++
            }
            pre.next=curr.next; 
        }
        this.size--;
    }
}
let list= new LinkedList();
list.insertAtEnd(3)
list.insertAtEnd(5)
list.insertAtStart(2)
list.insertAtIndex(6,3);
list.insertAtEnd(7)
list.traverse()
list.removeAtIndex(2);
console.log('After Removal')
list.traverse()
