const queue = {
    init() {
        this.array = []
        this.mystack = []
    },
    enqueue(value) {
        while (this.array.length){
            this.mystack.push(this.array.pop())
            i++
        }
        this.mystack.push(value)
    },
    dequeue() {
        while (this.mystack.length){
            this.array.push(this.mystack.pop())
        }
        return this.array.pop()
    },
    peak() {
        if (this.array.length > 0)
            return this.array[this.array.length - 1]
        else
            return this.mystack[0]
    }
}


const myqueue = Object.create(queue)

myqueue.init()
myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)

console.log(myqueue.peak());

