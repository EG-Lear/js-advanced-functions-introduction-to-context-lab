
function createEmployeeRecord(array) { //creates an object for the passed in employee information
    const obj = {
        'firstName': array[0], 
        'familyName': array[1], 
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
    console.log(obj)
    return obj
}

function createEmployeeRecords(employees) { //creates objects for multiple employees
    let records = employees.map(createEmployeeRecord)
    console.log('test')
    return records
}

function createTimeInEvent(employee, punch) { //assigns a time punch to an employee
    let addedPunch = employee
    addedPunch.timeInEvents.push(punchIn(punch))
    return addedPunch
}

//2014-02-28 1400
function punchIn(time) { //takes a string based time punch and returns an object of hour and date
    let seperated = time.split(" ")
    console.log(seperated)
    const obj = {
        'date': seperated[0],
        'hour': parseInt(seperated[1]),
        'type': "TimeIn"
    }
    console.log(obj)
    return obj
}

function createTimeOutEvent(employee, punch) { //assings a time out punch
    let addedPunch = employee
    addedPunch.timeOutEvents.push(punchOut(punch))
    return addedPunch
}

function punchOut(time) { //takes a string based time punch and returns an object of hour and date
    let seperated = time.split(" ")
    console.log(seperated)
    const obj = {
        'date': seperated[0],
        'hour': parseInt(seperated[1]),
        'type': "TimeOut"
    }
    console.log(obj)
    return obj
}

function hoursWorkedOnDate(employee, dateVal) { //takes employee information and a date and calculates hours worked
    let inCheck = employee.timeInEvents.find(check => check.date === dateVal)
    let outCheck = employee.timeOutEvents.find(checks => checks.date === dateVal)
    console.log (inCheck, outCheck)
    let hours = (outCheck.hour - inCheck.hour) / 100
    console.log(hours)
    return hours
}

function wagesEarnedOnDate(employee, date) { //checks the wages earned on a specific day
    let value = hoursWorkedOnDate(employee, date)
    return value * employee.payPerHour
}

function allWagesFor(employee) { //calculates total wages for an employee
    let total = 0
    for (let i = 0; i < employee.timeInEvents.length; i++) {
        total = total + wagesEarnedOnDate(employee, employee.timeInEvents[i].date)
        console.log(total)
    }
    return total
}

function calculatePayroll(employees) { //calculates total combined wages paid out to multiple employees
    let total = 0
    employees.forEach(worker => {
        total = total + allWagesFor(worker)
        console.log(total)
    })
    return total
}

function findEmployeeByFirstName(group, target) {
    let employee = group.find(check => check.firstName === target)
    return employee
}

 function myTest() {
//     let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
//     let updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
//     updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
//     updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0800")
//     updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
//     //hoursWorkedOnDate(cRecord, "0044-03-15")
//     allWagesFor(cRecord)
    let src = [
        ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
        ["Natalia", "Romanov", "CEO", 150]
    ]
    let emps = createEmployeeRecords(src)
    let loki = findEmployeeByFirstName(emps, "Loki")
    expect(loki.familyName).to.equal("Laufeysson-Odinsson")
 }