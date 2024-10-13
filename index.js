// Code your solution here
const driverNames = ["Sam", "Bob", "Peter"];

const drivers = [
    {
      name: 'Sam',
      hometown: 'Pittsburgh'
    },
    {
      name: 'Bob',
      hometown: 'Tampa Bay'
    },
    {
      name: 'Peter',
      hometown: 'New York'
    }
]

function findMatching(driver, string) {
    return driver.filter(element => element.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driver, string) {
    const requiredName = driver.filter(element => element.startsWith(string));
    return requiredName;
}

function matchName(driver, string) {
    const matchingNames = driver.filter(element => element.name === string);
    return matchingNames;
}