function writeln(a) {
    console.log(a)
}

function countString(piece, whole)
{
    let count = 0
    for (let index = -1; (index = whole.indexOf(piece, index + 1)) !== -1; ++count)
        ;



    return count
}


function main()
{
    let result = countString("e", "mehmet")
    writeln(result)
}

main()