function write(a) {
    process.stdout.write(a)
}

function writeLine(a) {
    write(a + "\r\n")
}

function reverse(val) {
    let reversed = 0
    while (val !== 0) {
        reversed = reversed * 10 + val % 10
        val = parseInt(val / 10)
    }
    return reversed
}

function getDigitsCount(val) {
    if (!val)
        return 1

    let count = 0

    while (val != 0) {
        ++count
        val = parseInt(val / 10)
    }

    return count
}

function getFirstN(val, n) {
    let digitCount = getDigitsCount(val)
    let trimCount = digitCount - n
    let result = parseInt(val / Math.pow(10, trimCount))
    return result
}

function getLastN(val, n) {
    let trim = Math.pow(10, n)
    let result = val - parseInt(val / trim) * trim
    return result
}

function isPrime(val) {
    if (val <= 1)
        return false

    let halfVal = parseInt(val / 2)

    for (let i = 2; i <= halfVal; ++i)
        if (val % i == 0)
            return false

    return true
}

function condition1(val) {
    if (reverse(val) > val)
        return true
    return false
}

function condition2(val) {
    return isPrime(val)
}

function condition3(val) {
    return isPrime(reverse(val))
}

function condition4(val) {
    return isPrime(getFirstN(val, 2))
}

function condition5(val) {
    return isPrime(getLastN(val, 2))
}

function condition6(val) {
    return isPrime(reverse(getFirstN(val, 2)))
}

function condition7(val) {
    return isPrime(reverse(getLastN(val, 2)))
}

function sevenConditions() {
    let result = ""
    for (let val = 100; val < 1000; ++val) {
        if (!condition1(val)) continue
        if (!condition2(val)) continue
        if (!condition3(val)) continue
        if (!condition4(val)) continue
        if (!condition5(val)) continue
        if (!condition6(val)) continue
        if (!condition7(val)) continue
        result += `${val} `
    }
    return result
}

function smallestSumOf3Primes(digit) {
    let lowerLimit = Math.pow(10, digit - 1)
    let sum = 0
    let primeCount = 0

    for (let i = lowerLimit; ; ++i) {
        if (isPrime(i)) {
            ++primeCount
            sum += i
        }
        if (primeCount === 3)
            return sum;
    }
}

function largestSumOf3Primes(digit) {
    let upperLimit = Math.pow(10, digit)
    let sum = 0
    let primeCount = 0

    for (let i = upperLimit; ; --i) {
        if (isPrime(i)) {
            ++primeCount
            sum += i
        }
        if (primeCount === 3)
            return sum;
    }
}

function main() {
    const sevenContitionNum = 113

    writeLine(`3 digit numbers meets with 7 conditions: ${sevenConditions(sevenContitionNum)}`)

    let primeDigitLimit = 2
    writeLine(`The largest prime number that is the sum of ${primeDigitLimit}-digits prime numbers: ${largestSumOf3Primes(primeDigitLimit)}`)

    writeLine(`The smallest prime number that is the sum of ${primeDigitLimit}-digits prime numbers: ${smallestSumOf3Primes(primeDigitLimit)}`)

    primeDigitLimit = 3
    writeLine(`The largest prime number that is the sum of ${primeDigitLimit}-digits prime numbers: ${largestSumOf3Primes(primeDigitLimit)}`)

    writeLine(`The smallest prime number that is the sum of ${primeDigitLimit}-digits prime numbers: ${smallestSumOf3Primes(primeDigitLimit)}`)

}

main()


