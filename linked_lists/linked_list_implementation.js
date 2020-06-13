

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
            console.log(value);
            const node = {
                value: value,
                next: this.head
            }
            this.head = node
            this.length++
            return node
        },
        insert(index, value) {
            let i = 1
            if (index > this.length)
                return (console.log("The index is wrong"))
            const newNode = {
                value: value,
                next: null
            }
            let targetNode = this.head
            while (i < index - 1) {
                targetNode = targetNode.next
                i++
            }
            if (index == 1)
                this.prepend(value)
            else {
                let tempNode = targetNode.next
                targetNode.next = newNode
                newNode.next = tempNode
                return newNode
            }
        }
    }
    return obj
}

let newlist = linkedList(5)
newlist.append(10)
newlist.append(70)
newlist.append(90)
newlist.append(620)
newlist.insert(5, 89)
console.log(newlist.head.next.next.next.next);

