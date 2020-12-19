function writeln(a)
{
    console.log(a)
}

class Circle {
    constructor(r = 0)
    {
        this.r = r
    }

    get r()
    {
        return this._r;
    }

    set r(value)
    {
        this._r = Math.abs(value)
    }

    get area() {return Math.PI * this._r * this._r}
    get circumference() {return 2 * Math.PI * this._r}
}

class Point {
    constructor(x = 0,  y = 0)
    {
        this._x = x;
        this._y = y;
    }

    get x()
    {
        return this._x;
    }

    set x(value)
    {
        this._x = value;
    }

    get y()
    {
        return this._y;
    }

    set y(value)
    {
        this._y = value;
    }

    offset(dx, dy = dx)
    {
        this._x += dx
        this._y += dy
    }

    toString() {return `{x: ${this._x}, y: ${this._y}}`}
}

class AnalyticalCircle extends Circle {
    constructor(r = 0, x = 0, y = 0)
    {
        super(r)
        this._center = new Point(x, y)
    }

    get center() {return new Point(this.x, this.y)}

    set center(value) {this.setCenter(value.x, value.y)}

    get x() {return this._center.x}

    set x(value) {this._center.x = value}

    get y() {return this._center.y}

    set y(value) {this._center.y = value}

    setCenter(x = 0, y = 0) {this.x = x; this.y = y}

    offset(dx, dy = dx) {this._center.offset(dx, dy)}
}

function main()
{
    let ac = new AnalyticalCircle(-3.4, 100, 100)

    let center = ac.center

    center.offset(20, 30)

    writeln(`{x : ${center.x}, y : ${center.y}}`)
    writeln(`{x : ${ac.x}, y : ${ac.y}}`)

    ac.offset(20, 89)

    writeln(`{x : ${ac.x}, y : ${ac.y}}`)

    ac.center = new Point(200, 200)

    writeln(`{x : ${ac.x}, y : ${ac.y}}`)
}

main()