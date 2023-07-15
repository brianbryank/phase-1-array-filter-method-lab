// Code your solution here
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }
  //This function takes an array of drivers and a string as arguments. 
  //In this function, each element of the drivers array is a JavaScript object that has a property of name.
  // The function should return each element whose name property matches the provided string argument.
  
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }