class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //insert a value
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let curr = this.root
        while (true) {
            if (data === curr.data)
                return undefined //no duplicates allowed

            if (data < curr.data) {
                if (curr.left === null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            } else {
                if (curr.right === null) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }
    inOrder(node = this.root, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.data);
            this.inOrder(node.right, result);
        }
        return result
    }
    preOrder(node = this.root, result = []) {
        if (node) {
            result.push(node.data);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result
    }
    postOrder(node = this.root, result = []) {
        if (node) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.data);
        }
        return result
    }
    //Search for some value
    contains(data) {
        if (!this.root) return false;
        let curr = this.root;
        while (curr) {
            if (data === curr.data) return true
            curr = (data < curr.data) ? curr.left : curr.right
        }
        return false;
    }
    findMin() {
        let curr = this.root;
        while (curr.left) {
            curr = curr.left
        }
        return curr.data
    }
    findMax() {
        let curr = this.root;
        while (curr.right) {
            curr = curr.right
        }
        return curr.data
    }
    //length = total no of nodes
    size(node = this.root) {
        if (!node) return 0
        return 1 + this.size(node.left) + this.size(node.right)
    }
    heightLeft(node = this.root) {
        if (!node) return 0
        return 1 + this.size(node.left)
    }
    heightRight(node = this.root) {
        if (!node) return 0
        return 1 + this.size(node.right)
    }
    height() {
        const leftLen = this.heightLeft()
        const rightLen = this.heightRight()
        if (leftLen == rightLen)
            return leftLen
        else if (leftLen > rightLen)
            return leftLen
        else
            return rightLen
    }

    delete(data, curr = this.root, parent = null) {
        if (!curr) return false
        if (data < curr.data) {
            return this.delete(data, curr.left, curr)
        } else if (data > curr.data) {
            return this.delete(data, curr.right, curr)
        } else {
            console.log('delete this', curr)
            //case 1: No Children
            if (!curr.left && !curr.right) {
                if (!parent) this.root = null;
                else if (parent.left == curr)
                    parent.left = null
                else
                    parent.right = null
            }
            //case 2 one child
            else if (!curr.left || !curr.right) {
                const child = curr.left || curr.right;
                if (!parent) this.root = child
                else if (parent.left == curr)
                    parent.left = child
                else
                    parent.right = child
            }
            //case 3: Two Children
            else {
                let successorParent = curr
                let successor = curr.right;
                //find In order successor
                while (successor.left) {
                    successorParent = successor;
                    successor = successor.left
                }
                curr.data = successor.data //Replace Value
                //Recursively delete successor
                if (successorParent.left === successor) {
                    successorParent.left = successor.right
                } else {
                    successorParent.right = successor.right
                }
            }
            return true;
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(6)
bst.insert(20)
bst.insert(30)
bst.insert(35)
// console.log(bst)
// console.log('InOrder Traversal', bst.inOrder())
// console.log('Pre Order Traversal', bst.preOrder())
// console.log('Post Order Traversal', bst.postOrder())
// console.log(bst.contains(2))
// console.log(bst.contains(3))
// console.log(bst.findMin())
// console.log(bst.findMax())
// console.log("No of Nodes in Tree: ", bst.size())
// console.log('Tree Length:', bst.height())
// console.log(bst.delete(2))
// console.log(bst.delete(7));
// console.log(bst.delete(15))
console.log(bst.delete(5))
console.log(bst)