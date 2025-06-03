class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
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
    reverse(){
        let prev=null;
        let current=this.head;
        while(current){
            let nextNode=current.next;//store temp
            current.next=prev//reverse pointer
            prev=current; //prev forward direction
            current=nextNode; //curr forward move
        }
        this.head=prev
    }
    printList(){
        let curr=this.head;
        let result=''
        while(curr){
            result+=curr.data+" "
            curr=curr.next
        }
        console.log('----------------------------')
        console.log(result)
    }
}
const list= new LinkedList();
list.insertAtEnd(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
console.log('Original List')
list.printList()
list.reverse()
console.log('reversed List')
list.printList()
