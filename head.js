/*const assertEqual = function()
//function head (array) {
  let arrayOne = array[0];
  return arrayOne
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));




x = 12;
if(true) {
  x + 2;
  x = 4;
}
console.log(x);

//const assertEqual = function(actual, expected) {
//const assertEqual = require('./assertEqual'); 
//if (actual === expected) {
        //return "Assertion Passed: [actual] === [expected]";
    //}
    //else if (actual !== expected) {
       // return "Assertion Failed: [actual] !== [expected]";
    //};

const mean = function(arr) {
  let avgList = arr [0]
  for (let i = 0; i < arr.length; i++){
     avgList += arr[i]
  }
    return avgList / arr.length
}

const round = function(number) {
return Math.round(number * 100) / 100;
};
console.log(mean([6,2,3,4,9,6,1,0,5]));
//console.log(assertEqual(mean([6,2,3,4,9,6,1,0,5])));
*/


const assertEqual = function(actual, expected) {

  if( actual === expected)
    return "Assertion Passed: ["+actual+"] === ["+expected+"]"
  else
    return "Assertion failed: ["+actual+"] !== ["+expected+"]"

};

const head = function(arr1) {
  return arr1[0];
};


console.log(assertEqual(head([5,6,7]), 5));

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
module.exports = head;












