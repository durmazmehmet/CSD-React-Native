let writeln = a => console.log(a)
let randomNumber = (min, max) => Math.random() * (max - min) + min
let randomInt = (min, max) => parseInt(randomNumber(min, max))
let getDiceSum = () => randomInt(1,7) + randomInt(1,7)

function doWorkForRepeat(num) {
    for(;;) {
        let diceSum = getDiceSum()

        if(diceSum === 7)
            return false

        if(diceSum === num)
            return true
    }
}

function playSim() {
    var dice = getDiceSum()
    switch (dice) {
        case 7:
        case 11:
            return true
        case 2:
        case 3:
        case 12:
            return false
        default:
            return doWorkForRepeat(dice)
    }
}

function crapsGame(numberOfGames) {

    var winingGames = 0;
    var craps = 0;

    for(let i = 0; i < numberOfGames; ++i)
        if(playSim())
            ++winingGames

    writeln(`Oyun sayısı: ${numberOfGames}`)
    writeln(`Kazanan: ${winingGames}`)
    writeln(`Kaybeden: ${craps}`)
    writeln(`Kazanma olasılığı: ${winingGames/numberOfGames}`)
}

function main() {
    crapsGame(100000)
}

main()