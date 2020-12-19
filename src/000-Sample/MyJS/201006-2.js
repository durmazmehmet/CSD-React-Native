function writeln(a) {
    console.log(a)
}

function partitionArray(array, pred) {

    let pIndex = 0

    /*

    while (pIndex < array.length && pred(array[pIndex]))
        ++pIndex*/

    pIndex = array.findIndex(pred)

    if (pIndex === array.length)
        return pIndex

    for(let i = pIndex + 1; i < array.length; ++i)
        if(pred(array[i]))
            gswap(array, i, pIndex++)


    return pIndex
}

function gswap(array, index, pIndex) {
    let temp = array[index]
    array[index] = array[pIndex]
    array[pIndex] = temp
}

function main() {

    let numbers = [10, 2, 5, -6, 9, 10, 12]

    writeln(numbers)

    writeln(partitionArray(numbers, val => val % 2 == 0))

    writeln(numbers)



}



main()