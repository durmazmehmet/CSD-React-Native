function write(a)
{
    process.stdout.write(a)
}

function writeLine(a)
{
    write(a + "\r\n")
}

function isPrime(val)
{
    if (val <= 1)
        return false

    let halfVal = parseInt(val / 2)

    for (let i = 2; i <= halfVal; ++i)
        if (val % i == 0)
            return false

    return true
}

function getPrime(n)
{
    let count = 0
    let i = 2

    for (; count < n; ++i)
        if (isPrime(i))
            ++count

    return i - 1
}

function determinePrimeCoeffs(n){
    let powers = new Array(n)
    let powerCounter = 0

    for(let i = 1; i < n; ++i)
    {
        let mod = 0
        let thePrime = getPrime(i)
        while (mod === 0)
        {
            mod = n % thePrime
            if(mod === 0)
            {
                n = n / thePrime
                powers[powerCounter] = thePrime
                ++powerCounter
            }
        }
    }
    return powers
}

function goldbach(n)
{
    if (n <= 2)
        return "Please enter a number bigger then 2"

    if(n % 2 !== 0)
        return "Please enter a even number"

    for(let i = 1;; ++i)
    {
        let thePrime = getPrime(i)

        if(thePrime > n)
            break

        if(isPrime(n - thePrime))
            writeLine(`${thePrime} + ${n - thePrime}`)
    }
}

function displayBallGameShape(height, width)
{
    let ballPosition = 1
    let direction = true
    for(let i = 0; i < height; ++i)
    {
        write("|")
        for(let j = 0; j < width; ++j)
        {
            if(ballPosition === j+1)
                write("*")
            else
                write(" ")
        }
        writeLine("|")

        if(ballPosition === width && direction)
            direction = false

        if(ballPosition === 1 && !direction)
            direction = true

        if(direction)
            ++ballPosition
        else
            --ballPosition
    }
}


function main()
{
    const Num = 16

    writeLine(`Number: ${Num}`)
    writeLine(`Coeffs: ${determinePrimeCoeffs(Num)}`)

    writeLine(`Goldbach equations for ${Num}: `)
    goldbach(Num)

    displayBallGameShape(12,5)
}

main()


