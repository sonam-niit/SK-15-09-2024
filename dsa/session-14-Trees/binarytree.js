class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null // left child
        this.right=null //right child
    }
}
class BinaryTree{
    constructor(){
        this.root=null //by default root node must be null
    }
    insertLeft(parentNode,value){
        const newNode= new TreeNode(value)
        parentNode.left= newNode;
        return newNode;
    }
    insertRight(parentNode,value){
        const newNode= new TreeNode(value)
        parentNode.right= newNode;
        return newNode;
    }
    //Traversals
    inorder(node){
        if(node){
            this.inorder(node.left);
            console.log(node.value)
            this.inorder(node.right)
        }
    }
    preorder(node){
        if(node){
            console.log(node.value)
            this.preorder(node.left);
            this.preorder(node.right)
        }
    }
    postorder(node){
        if(node){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value)
        }
    }
}

const tree= new BinaryTree();
tree.root= new TreeNode(1);
const left= tree.insertLeft(tree.root,2)
const right= tree.insertRight(tree.root,3)
tree.insertLeft(left,4);
tree.insertRight(left,5);
// tree.insertLeft(right,6);
// tree.insertRight(right,7);
// console.log(tree)
console.log('inorder traversal')
tree.inorder(tree.root)
console.log('pre traversal')
tree.preorder(tree.root)
console.log('post traversal')
tree.postorder(tree.root)