// Code your solution here
function findMatching(nameArray, oneName){
    return nameArray.filter(name => name.toLowerCase() === oneName.toLowerCase())
}
function fuzzyMatch(nameArray, partialName){
    return nameArray.filter(name => name.slice(0,partialName.length) === partialName)
}
function matchName(driverObjArray, nameMatch){
    return driverObjArray.filter(driverObj => driverObj.name === nameMatch)
}