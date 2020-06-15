const node = {
    init(value) {
        this.value = value
        this.next = null
    }
}

const stack = {
    init() {
        this.top = null
        this.bottom = null
        this.length = 0
    },
    peak() {
        return this.top.value
    },
    push(value) {
        const newNode = Object.create(node)
        newNode.init(value)
        if (this.top === null){
            this.top = newNode
            this.bottom = newNode
        }
        else {
            const tempNode = this.top
            this.top = newNode
            this.top.next = tempNode
        }
        this.length++
        return this
    },
    pop() {
        if (this.top === null)
            return null
        if (this.top === this.bottom)
            this.bottom = null
        const tempNode = this.top
        this.top = this.top.next
        this.length--
        return tempNode.value
    }
}

const mystack = Object.create(stack)
mystack.init()
mystack.push(10)
mystack.push(20)
mystack.push(30)
console.log(mystack.pop());
console.log(mystack.peak());
