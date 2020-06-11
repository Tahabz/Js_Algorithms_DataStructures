
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
                if (Array.isArray(this.data[adress]))
                    return this.data[adress][1]
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

