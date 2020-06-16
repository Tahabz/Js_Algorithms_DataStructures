const node = {
    init(value) {
        this.value = value,
        this.next = null
    }
}

const queue = {
    init() {
        this.first = null
        this.last = null
        this.length = 0
    },
    peek() {
        return this.first.value
    },
    enqueue(value) {
        const newNode = Object.create(node)
        newNode.init(value)
        if (this.first === null){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    },
    dequeue() {
        if (this.first === null)
            return null
        const tempNode = this.first
        this.first = this.first.next
        if (this.first === this.last)
            this.last = null
        this.length--
        return tempNode.value
    }
}

const myqueue = Object.create(queue)
myqueue.init()
myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)


console.log(myqueue.peek())