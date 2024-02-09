// Code your solution in this file!
const returnFirstTwoDrivers = (names) => {
    let newNames = names.slice(0,2);
    return newNames;
}

const returnLastTwoDrivers = (lastNames) => {
    let newLastNames = lastNames.slice(-2)
    return newLastNames;
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    
    return function faremultiply(fare){
       return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (arrayOfDrivers,func) => {
    return func(arrayOfDrivers);
}