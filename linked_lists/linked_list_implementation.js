

const linkedList = function (value) {
    const head = {
        value: value,
        next: null
    }
    let tail = head
    let lastNode = head
    const obj = {
        length: 1,
        head,
        tail,
        append(value) {
            const node = {
                value: value,
                next: null,
            }
            this.tail.next = node
            this.tail = node
            this.length++;
            return node
        },
        prepend(value) {
            const node = {
                value: value,
                next: this.head
            }
            this.head = node
            this.length++
            return node
        },
        getNodeAt(index) {
            if (index > this.length)
                index = this.length
            else if (index < 1)
                index = 1
            let i = 1
            let targetNode = this.head
            while (i < index) {
                targetNode = targetNode.next
                i++
            }
            return targetNode
        },
        insert(index, value) {
            if (index <= 1)
                return this.prepend(value)
            const newNode = {
                value: value,
                next: null
            }
            let targetNode = this.getNodeAt(index - 1)
            let tempNode = targetNode.next
            targetNode.next = newNode
            newNode.next = tempNode
            return newNode
        },
        delete(index) {
            if (index < 1)
                index = 1
            else if (index > this.length)
                index = this.length
            if (index === 1){
                const tempNode = this.head
                delete this.head
                this.head = tempNode.next
            }
            else {
                previousNode = this.getNodeAt(index - 1)
                const tempNode = previousNode.next
                delete previousNode.next
                previousNode.next = tempNode.next
                if (index === this.length)
                    this.tail = previousNode
            }
            this.length--
        }
    }
    return obj
}


//                  [L1-->L2-->L3-->L4-->L5]     



let newlist = linkedList(5)
newlist.append(10)
newlist.append(70)
newlist.append(80)
newlist.append(90)

