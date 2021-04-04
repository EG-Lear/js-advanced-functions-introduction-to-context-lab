
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