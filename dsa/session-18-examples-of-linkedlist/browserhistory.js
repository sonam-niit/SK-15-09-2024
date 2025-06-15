class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class BrowserHistory{
    constructor(){
        this.head=null;
        this.tail=null;
        this.curr=null;//accessing curr page
    }
    visit(page){
        const newNode= new Node(page);
        if(this.curr){
            newNode.prev=this.curr;
            this.curr.next=newNode;
        }else{
            this.head=newNode
        }
        this.curr=newNode
        this.tail=newNode
        console.log('Visited '+page)
    }
    back(){
        if(this.curr && this.curr.prev){
            this.curr=this.curr.prev
            console.log(`Back to ${this.curr.data}`)
        }else{
            console.log('No Previous Page')
        }
    }
    forward(){
        if(this.curr && this.curr.next){
            this.curr=this.curr.next
            console.log(`Forward to ${this.curr.data}`)
        }else{
            console.log('No next Page')
        }
    }
    printHistory(){
        let temp= this.tail;
        let history=[]
        while(temp){
            history.push(temp.data)
            temp=temp.prev
        }
        console.log(`Full History: ${history.join(' -> ')}`)
    }
}
const browser= new BrowserHistory();
browser.visit("google.com");
browser.visit("youtube.com");
browser.visit("github.com");
console.log(browser)
browser.back()
browser.back()
// browser.back()
browser.forward()
browser.forward()
// browser.forward()
browser.printHistory()