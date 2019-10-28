// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lowercaseDrivers = drivers.map(function(driver_name) {return driver_name.toLowerCase()})
    return lowercaseDrivers
}

function nameToAttributes(drivers) {
    const driversAttributes = drivers.map(function(driver_name) {
        let firstN = driver_name.split(' ')[0]
        let lastN = driver_name.split(' ')[1]
        return {firstName: firstN, lastName: lastN}
    });
    return driversAttributes
}

function attributesToPhrase(drivers) {
    const phrase = drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
    return phrase
}