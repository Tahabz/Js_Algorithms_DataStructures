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
            while (true) {
                if (value < tempNode.value) {
                    if (tempNode.left === null) {
                        tempNode.left = newNode
                        return this
                    } else
                        tempNode = tempNode.left
                }
                else if (value > tempNode.value) {
                    if (tempNode.right === null) {
                        tempNode.right = newNode
                        return this
                    } else
                        tempNode = tempNode.right
                }
            }
        }
    },
    lookup(value) {
        let tempNode = this.root
        while (tempNode !== null) {
            if (value === tempNode.value)
                return tempNode
            else if (value < tempNode.value)
                tempNode = tempNode.left
            else if (value > tempNode.value)
                tempNode = tempNode.right
        }
        return false
    },
    lookupToRemove(value) {
        if (this.root === null) {
            return null
        } else if (this.root.value === value) {
            return this.root
        }
        else {
            let nodeToRemove = this.root
            while (true) {
                if (value <= nodeToRemove.left.value) {
                    if (nodeToRemove.left.value === value) {
                        return {
                            nodeToRemove: nodeToRemove.left,
                            parentNode: {
                                node: nodeToRemove,
                                dir: 'left'
                            }
                        }
                    } else
                        nodeToRemove = nodeToRemove.left
                }
                else if (value >= nodeToRemove.right.value) {
                    if (nodeToRemove.right.value === value) {
                        return {
                            nodeToRemove: nodeToRemove.right,
                            parentNode: {
                                node : nodeToRemove,
                                dir: 'right'
                            }
                        }
                    } else
                        nodeToRemove = nodeToRemove.right
                }
            }
        }
    },
    BFSearch() {
        const list = []
        const queue = []
        queue.push(this.root)
        while (queue.length > 0) {
            let currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        return list
    },
    DFSinOrder() {
        return this.traverseInOrder(this.root, [])
    },
    DFSpreOrder() {
        return this.traversePreOrder(this.root, [])
    },
    DFSpostOrder() {
        return this.traversePostOrder(this.root, [])
    },
    traversePostOrder(node, list) {
        if (node.left) {
            this.traversePostOrder(node.left, list)
        }
        if (node.right) {
            this.traversePostOrder(node.right, list)
        }
        list.push(node.value)
        return list
    },
    traversePreOrder(node, list) {
        list.push(node.value)
        if (node.left) {
            this.traversePreOrder(node.left, list)
        }
        if (node.right) {
            this.traversePreOrder(node.right, list)
        }
        return list
    },
    traverseInOrder(node, list) {
        if (node.left) {
            this.traverseInOrder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this.traverseInOrder(node.right, list)
        }
        return list
    },
    
}


const mytree = Object.create(tree)
mytree.init()
mytree.insert(9)
mytree.insert(4)
mytree.insert(20)
mytree.insert(1)
mytree.insert(6)
mytree.insert(15)
mytree.insert(170)


//console.log(JSON.stringify(traverse(mytree.root)))
//     9
//  4     20
//1  6  15  170

console.log(mytree.DFSpostOrder())


function mytraverse(node) {
    const tree = {
        value: node.value
    }
    tree.left = node.left == null ? null : mytraverse(node.left)
    tree.right = node.right == null ? null : mytraverse(node.right)
    return tree
}












function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}