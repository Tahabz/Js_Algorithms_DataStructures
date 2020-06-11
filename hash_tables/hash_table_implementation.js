
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
                    this.data[adress].push([key, value])
            },
            get: function (key) {
                const adress = hash.call(this, key)
                const currentBucket = this.data[adress]
                if (Array.isArray(currentBucket)){
                    if (Array.isArray(currentBucket[0])) {
                        let i = 0
                        for (let element of currentBucket){
                            if (element[i] === key)
                                return element[i][1]
                        }
                    } else
                        return currentBucket[1]
                }
                return undefined
            }
        }
    }
}

const HashTable = HashTableFactory()
const hashObj = HashTable(2)

hashObj.set('taha', '22')
hashObj.set('baz', '244')

console.log(hashObj.get('taha'));




