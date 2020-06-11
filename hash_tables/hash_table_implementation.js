
const _hash = function (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
}

const makeHashTable = function (size) {
    return {
        data: new Array(30),
        set: function (key, value) {
            this.data[_hash.call(this, key)] = [key, value]
        },
        get: function (key) {
            if (Array.isArray(this.data[_hash.call(this, key)]))
                return this.data[_hash.call(this, key)][1]
            return undefined
        }
    }
}

const hashObj = makeHashTable(30)

hashObj.set('taha', '22')
hashObj.set('baz', '244')
hashObj.set('mohamed', '2')
hashObj.set('hmida', '0')

console.log(hashObj.get('taha'))
