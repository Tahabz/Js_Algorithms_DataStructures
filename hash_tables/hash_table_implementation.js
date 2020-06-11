
const HashTableFactory = function (size) {
    const hash = function (key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    return function (size) {
        return {
            data: new Array(size),
            set: function (key, value) {
                const adress = hash.call(this, key)
                if (!Array.isArray(this.data[adress]))
                    this.data[adress] = [key, value]
                else
                {
                    const arr = []
                    arr.push(this.data[adress], [key, value])
                    this.data[adress] = arr
                }
            },
            get: function (key) {
                const adress = hash.call(this, key)
                const currentBucket = this.data[adress]
                if (Array.isArray(currentBucket)){
                    if (Array.isArray(currentBucket[0])) {
                        let i = 0
                        for (let element of currentBucket){
                            if (element[0] === key)
                                return element[1]
                            i++;
                        }
                    } else
                        return currentBucket[1]
                }
                return undefined
            },
            keys: function() {
                const keys = []
                for(let element of this.data){
                    if (Array.isArray(element)) {
                        if (Array.isArray(element[0])){
                            element.forEach(el => {
                                keys.push(el[0])
                            })
                        }
                        else
                            keys.push(element[0])
                    }
                }
                return keys
            }
        }
    }
}

const HashTable = HashTableFactory()
const hashObj = HashTable(20)

hashObj.set('taha', '22')
hashObj.set('baz', '244')


console.log(hashObj.keys());