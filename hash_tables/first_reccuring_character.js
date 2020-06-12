const firstReccuringChar = function (arr) {
    const hash = new Map()
    for(let i = 0; i < arr.length; i++){
        if (hash.get(arr[i]))
            return (arr[i])
        hash.set(arr[i], true)
    }
    return undefined
}


const firstReccuringChar2 = function (arr) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if (arr[i] === arr2[j])
                return (arr[i])
            }
        arr2.push(arr[i])
    }
    return undefined
}

console.log(firstReccuringChar2([1,2,2,1,6,7]))

