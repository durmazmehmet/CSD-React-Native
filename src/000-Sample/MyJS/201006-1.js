function writeln(a)
{
    console.log(a)
}

let IntVal = function (val) {
    this.val = val //parametre olarak aldığı val'ı fonsiyonun veri elemano yap


    this.plus = function (val) {
        this.val += val
    }

    this.times = function (val) {
        this.val *= val
    }

    this.minus = function (val) {
        this.plus(-val)
    }
}


function main(){

    let intval = new IntVal(10)

    intval.plus(20)

    writeln(intval.val)

    intval.minus(20)

    writeln(intval.val)

    intval.times(2)

    writeln(intval.val)

}

main()