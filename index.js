
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
    addedPunch.timeInEvents = punchIn(punch)
    return addedPunch
}

//2014-02-28 1400
function punchIn(time) { //takes a string based time punch and returns an object of hour and date
    let seperated = time.split(" ")
    const obj = {
        'date': seperated[0],
        'hour': seperated[1]
    }
    console.log(obj)
    return obj
}