class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.addVertex(vertex1);
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        //comment above line to make it directed graph
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2);
        this.adjacencyList[vertex2]=this.adjacencyList[vertex1].filter(v=>v!==vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacent=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacent);
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        console.log('---------------------------------------')
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} --> ${this.adjacencyList[vertex].join(', ')}`)
        }
    }
}
const myGraph= new Graph();
myGraph.addEdge('A','B');
myGraph.addEdge('A','C');
myGraph.addEdge('B','D');
myGraph.addEdge('C','D');
myGraph.display()
// myGraph.removeEdge('A','B');
myGraph.removeVertex('A')
myGraph.display()