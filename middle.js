const eqArrays = require("./eqArrays");
//const assertArraysEqual = require('../assertArraysEqual');
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};



const middle = function(numArray) {
  var middleVal = Math.floor(numArray.length / 2);
  if(numArray.length % 2 === 0) {
    return (numArray[middleVal - 1]  + "," + numArray[middleVal]);
  } else {
    return (numArray[middleVal]);
  }
};

console.log(middle([1,3,5])); // expected => []
console.log(middle([1,2,3])); // expected => [2]
console.log(middle([1,2,3,4,5,6])); // expected => [3]

module.exports = middle;


