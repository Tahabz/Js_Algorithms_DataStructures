
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
                if (!Array.isArray(this.data[hash.call(this, key)]))
                    this.data[hash.call(this, key)] = [key, value]
                else
                    this.data[hash.call(this, key)].push([key, value])
            },
            get: function (key) {
                if (Array.isArray(this.data[hash.call(this, key)]))
                    return this.data[hash.call(this, key)][1]
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
console.log(hashObj.get('baz'));

