const eqArrays = require("./eqArrays");
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

module.exports = middle;


