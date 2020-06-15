const stack = {
    peak() {
        if (!Array.isArray(this.array))
            return null
        return this.array[this.array.length - 1]
    },
    push(value) {
        if (!Array.isArray(this.array))
            this.array = []
        this.array.push(value)
        return this
    },
    pop() {
        return this.array.pop()
    }
}


stack.push(10)
stack.push(20)
console.log(stack.pop())
console.log(stack.peak())
console.log(stack.peak())

