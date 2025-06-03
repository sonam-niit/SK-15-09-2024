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
        console.log('-----------------------------------')
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
    removeByValue(data){
        if(!this.head) return;
        if(this.head.data==data){
            this.head=this.head.next;
            this.size--;
            return;
        }
        let curr=this.head;
        let prev=null;
        while(curr && curr.data !== data){
            prev=curr;
            curr=curr.next
        }
        if(!curr){
            console.log('element not found');
            return;
        }
        prev.next=curr.next;
        this.size--;
    }
    search(data){
        let curr= this.head;
        let index=0;
        while(curr){
            if(curr.data==data) return index;
            curr=curr.next;
            index++;
        }
        return -1;
    }
}
let list= new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
found(20,list.search(20));
found(90,list.search(90));
// list.traverse(); //10-->20-->30-->40
// list.removeByValue(30);
// list.traverse()
// list.removeByValue(10); //remove head
// list.traverse();
// list.removeByValue(99);

function found(element,index){
    if(index>=0)
        console.log(element+' found at index '+index)
    else
        console.log(element+' Element not found')
}
