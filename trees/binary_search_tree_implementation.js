const node = {
    init(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

const tree = {
    init() {
        this.root = null
    },
    insert(value) {
        const newNode = Object.create(node)
        newNode.init(value)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            let tempNode = this.root
            while (1 == 1) {
                if (value < tempNode.value) {
                    if (tempNode.left === null) {
                        tempNode.left = newNode
                        return
                    } else
                        tempNode = tempNode.left
                }
                else if (value > tempNode.value) {
                    if (tempNode.right === null) {
                        tempNode.right = newNode
                        return
                    } else
                        tempNode = tempNode.right
                }
            }
        }
    },
    lookup(value) {
        let tempNode = this.root
        while (tempNode !== null){
            if (value === tempNode.value)
                return tempNode
            else if (value < tempNode.value)
                tempNode = tempNode.left
            else if (value > tempNode.value)
                tempNode = tempNode.right
        }
        return null
    }
}


const mytree = Object.create(tree)
mytree.init()
mytree.insert(9)

console.log(mytree.lookup(9))
//console.log(JSON.stringify(traverse(mytree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}