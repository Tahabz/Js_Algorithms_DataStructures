const bind = function (fn, obj) {
    return function (par){
        fn.call(obj, par)
    }
}

const ForEachForOjbects = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

const shiftItems = function (index) {
    for(let i = index; i < this.length; i++){
        this[i] = this[i + 1]
    }
    delete this[this.length - 1]
    this.length = this.length - 1
}

const myArray = function () {
    const obj = {
        length: arguments.length,
        forEach: ForEachForOjbects,
        push: function () {
            for (var i = 0; i < arguments.length; i++){
                this[this.length + i] = arguments[i]
            }
            return (this.length = this.length + i)
        },
        pop: function () {
            const item = this[this.length - 1]
            delete this[this.length - 1]
            this.length -= 1
            return item
        },
        delete: function (index) {
            const item = this[index]
            const shift = bind(shiftItems, this)
            shift(index)
            return item
        }
    }
    for (let i = 0; i < arguments.length; i++) {
        obj[i] = arguments[i]
    }
    return obj;
}

const array = myArray(0, 1, 2, 3, 4, 5, 6, 7, 8)


array.push('new','items','pushed');

array.delete(4);

array.forEach(x => console.log(x))

console.log(array.pop());

