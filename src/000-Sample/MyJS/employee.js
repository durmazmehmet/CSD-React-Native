function writeln(a)
{
    console.log(a)
}

class Employee {
    constructor(name, citizenId, address)
    {
        this._name = name;
        this._citizenId = citizenId
        this._address = address
    }

    get name() {return this._name}
    set name(str) {this._name = str}

    get citizenId() {return this._citizenId}
    set citizenId(id) {this._citizenId = id}

    get address() {return this._address}
    set address(addr) {this._address = addr}
    calculatePayment() {return 0}
}

class HumanResources {
    //...
    payInsurance(employee)
    {
        writeln(`name:${employee.name}`)
        writeln(`citizenId:${employee.citizenId}`)
        writeln(`address:${employee.address}`)
        writeln(`payment:${employee.calculatePayment()}`)
    }
}

class Worker extends Employee {
    constructor(name, citizenId, address, feePerHour, hourPerDay)
    {
        super(name, citizenId, address);
        this._feePerHour = feePerHour
        this._hourPerDay = hourPerDay
    }

    get feePerHour()
    {
        return this._feePerHour;
    }

    set feePerHour(value)
    {
        this._feePerHour = value;
    }

    get hourPerDay()
    {
        return this._hourPerDay;
    }

    set hourPerDay(value)
    {
        this._hourPerDay = value;
    }

    calculatePayment()
    {
        return this._feePerHour * this._hourPerDay * 30
    }
}

class ProjectWorker extends Worker {
    constructor(name, citizenId, address, feePerHour, hourPerDay, extra)
    {
        super(name, citizenId, address, feePerHour, hourPerDay)
        this._extra = extra
    }

    get extra()
    {
        return this._extra;
    }

    set extra(value)
    {
        this._extra = value;
    }

    calculatePayment()
    {
        return super.calculatePayment() + this._extra;
    }
}

function runCompanyApp()
{
    let humanResources = new HumanResources()
    let worker = new Worker("Ali", "12345678912", "Şişli", 78, 8)
    let projectWorker = new ProjectWorker("Ali", "12345678912", "Şişli", 78, 8, 500)

    humanResources.payInsurance(worker)
    writeln("///////////")
    humanResources.payInsurance(projectWorker)
}

function main()
{
    runCompanyApp()
}

main()
