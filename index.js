function returnFirstTwoDrivers(arr){
 return arr.slice(0,2); // return [arr[0],arr[1]];
}
function returnLastTwoDrivers(arr){
    return arr.slice(-2);
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(n){
return function(n2){
   return n * n2;
}
}
const fareDoubler= createFareMultiplier(2);
const fareTripler = function(n){
  return createFareMultiplier(3)
}

// function  fareTripler(n){
//    let tripleFare = createFareMultiplier() * 3;
//  return tripleFare;
// }

function selectDifferentDrivers(arr, func){
   return func(arr);
}