function write(a) {
    process.stdout.write(a)
}

function writeLine(a) {
    write(a + "\r\n")
}

function dh(value, name) {
    if (value == 1) return `${value} ${name} `
    if (value > 1 && value < 10) return `0${value} ${name}s `
    if (value > 9) return `${value} ${name}s `
    return ""
}

function drawBaklavaPattern(height) {
    var fullSize = height * 2
    let starPosition = height
    let numberOfStarts

    for (let i = 0; i < fullSize - 1; ++i) {
        if (i < height) {
            --starPosition
            numberOfStarts = 2 * i
        } else {
            ++starPosition
            numberOfStarts -= 2
        }

        for (let j = 0; j < starPosition; ++j)
            write(" ")

        for (let k = 0; k <= numberOfStarts; ++k)
            write("*")

        writeLine("")
    }
}

function displayDuration(duration) {
    let day = 0
    let second = 0
    let month = 0
    let year = 0
    let hour = 0
    let minute = 0

    if (duration >= 86400) {
        day = parseInt(duration / 86400)
        second = duration - day * 86400
    } else {
        second = duration
    }

    if (day >= 365) {
        year = parseInt(day / 365)
        day -= year * 365
    }
    if (day >= 30) {
        month = parseInt(day / 30)
        day -= day * month
    }

    if (second >= 3600) {
        hour = parseInt(second / 3600)
        second -= hour * 3600
    }
    if (second >= 60) {
        minute = parseInt(second / 60)
        second -= minute * 60
    }

    return `${dh(year, "year")}${dh(month, "month")}${dh(day, "day")}${dh(hour, "hour")}${dh(minute, "minute")}${dh(second, "second")}`
}

function main() {
    writeLine(`Baklava Pattern for ${6}:`)
    drawBaklavaPattern(6)

    writeLine(`Sum of ${displayDuration(3602)} is ${3602} seconds`)
}

main()


