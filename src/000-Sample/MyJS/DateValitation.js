function writeln(a){
    console.log(a)
}

let DaysOfMonth = [30,29,31,30,31,30,31,31,30,31,30,31]

let MonthsTR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

let MonthsEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let DaysTR = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

let DaysEN = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

let isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

let Days = (mon , year) => mon === 1 && isLeapYear(year) ? 29 : DaysOfMonth[mon]

let isValidDate = (year, mon, day) => day > 0 && day <= Days(mon, year) && mon < 12 && mon > 0 && year > 0

let LongDateEN = (year, mon, day) => isValidDate(year, mon, day) ?
    `${MonthsEN[mon]} ${day}${OrdinalNumber(day)} ${DaysEN[DayOrder(year, mon, day)]}, ${year}`: "Invalid Date"

function OrdinalNumber(num) {
    if(num < 10 || num > 20)
        switch (num % 10) {
            case 0: return ""
            case 1: return "st"
            case 2: return "nd"
            case 3: return "rd"
            default: return"th"
        } else
        return "th"
}

function DayOrder(year, mon, day) {
    var sum = year * 365 + day
    for(let i = 0; i < mon - 1; ++i)
        sum += Days(i, year)
    return sum % 7
}

function main(){
    writeln(LongDateEN(2020,11,21))
}

main()