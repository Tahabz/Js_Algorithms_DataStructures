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
    remove(value) {
        let node = this.lookupToRemove(value)
        let nodeToRemove = node.nodeToRemove
        let parentNode = node.parentNode
        let childParentNode = {
            dir: 0
        }
        while (true) {
            if (nodeToRemove.right === null) {
                if (nodeToRemove.left === null) {
                    if (childParentNode.dir !== 0) {
                        let parrentdir = parentNode.dir
                        let temp = parentNode.node[parentNode.dir]
                        parentNode.node[parrentdir] = nodeToRemove
                        nodeToRemove.left = childParentNode.nodeToRemove[childParentNode.dir]
                        childParentNode.nodeToRemove[childParentNode.dir] = null
                    }
                    else
                        parentNode.node[parentNode.dir] = null
                    return true
                }
                else {
                    childParentNode = {
                        nodeToRemove,
                        dir: 'right'
                    }
                    nodeToRemove = nodeToRemove.left
                }
            } else {
                childParentNode = {
                    nodeToRemove,
                    dir: 'left'
                }
                nodeToRemove = nodeToRemove.right
            }
        }
    }
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

const a = mytree.remove(20)

console.log(JSON.stringify(traverse(mytree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}