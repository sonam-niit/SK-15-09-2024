class TreeNode {
    constructor(name, isFile = false) {
        this.name = name;
        this.isFile = isFile;
        this.left = null // left child
        this.right = null //right child
    }
}
class FileSystem {
    constructor() {
        this.root = new TreeNode("Root");
    }
    findNode(current, name) {
        if (!current) return null;
        if (current.name === name) return current;
        return this.findNode(current.left, name)
            || this.findNode(current.right, name)
    }
    add(name, parentName, isFile = false) {
        const parent = this.findNode(this.root, parentName);
        if (!parent) {
            console.log(`No ${parentName} not found`)
            return
        }
        const newNode = new TreeNode(name, isFile);
        if (!parent.left) {
            parent.left = newNode
        } else if (!parent.right) {
            parent.right = newNode
        } else {
            console.log(`we cannot add more than 2 childern under ${parentName}`)
        }
    }
    print(node = this.root, indent = "") {
        if (!node) return
        console.log(indent + (node.isFile ? 'File: ' : 'Dir: ') + node.name)
        this.print(node.left, indent + " ")
        this.print(node.right, indent + " ")
    }
}

const fs = new FileSystem();
fs.add("Home", "Root")
fs.add("Docs", "Root")
fs.add('Project', "Home")
fs.add('Resume.pdf', "Docs", true)
fs.add('Notes.txt', "Docs", true)
console.log("\n File System Structure")
fs.print()