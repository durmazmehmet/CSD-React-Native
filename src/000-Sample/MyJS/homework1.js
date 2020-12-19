function write(a)
{
    process.stdout.write(a)
}

function writeLine(a)
{
    write(a + "\r\n")
}

function mid(num1, num2, num3)
{
    if((num2 >= num1 && num1 >= num3) || (num3 >= num1 && num1 >= num2)) return num1
    if((num1 >= num2 && num2 >= num3) || (num3 >= num2 && num2 >= num1)) return num2
    if((num2 >= num3 && num3 >= num1) || (num1 >= num3 && num3 >= num2)) return num3
    return 0
}

function max(num1, num2, num3, midNum){
    if(num1 > midNum) return num1
    if(num2 > midNum) return num2
    if(num3 > midNum) return num3
    return midNum
}

function min(num1, num2, num3, midNum){
    if(num1 < midNum) return num1
    if(num2 < midNum) return num2
    if(num3 < midNum) return num3
    return midNum
}

function showRelationBetweenNumber(num1, num2, num3)
{
    let midNum = mid(num1, num2, num3)
    let maxNum = max(num1, num2, num3, midNum)
    let minNum = min(num1, num2, num3, midNum)
    return `${maxNum} ${printRelation(maxNum,midNum)} ${printRelation(midNum,minNum)}`
}

function printRelation(num1, num2)
{
    if (num1 > num2)
        return `> ${num2}`

    return `= ${num2}`
}

function sigNum(num)
{
    let response = 0
    if (num > 0) response = 1
    if (num < 0) response = -1
    return response
}

function main(){
    const num1 = 5
    const num2 = 5
    const num3 = -1
    writeLine(`Show Relation between ${num1}, ${num2} and ${num3}`)
    writeLine(showRelationBetweenNumber(num1,num2,num3))
    writeLine(`Mid number is ${mid(num1,num2,num3)}`)
    writeLine(`Signum for ${num1} is ${sigNum(num1)}`)
}

main()


