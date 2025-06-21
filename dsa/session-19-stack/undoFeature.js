class UndoStack{
    constructor(){
        this.stack=[]
    }
    doAction(action){
        this.stack.push(action);
        console.log('Action',action)
    }
    undo(){
        if(this.stack.length==0)
            return "nothing to undo";
        const lastAction = this.stack.pop();
        return `undoing: ${lastAction}`
    }
}
const editor= new UndoStack();
editor.doAction("Type A");
editor.doAction("Type B");
console.log(editor.undo())
console.log(editor.undo())
console.log(editor.undo())