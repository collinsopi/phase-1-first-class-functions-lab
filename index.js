const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers =function (drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers =function (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return multiplier * fare;
    }
 }

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};
