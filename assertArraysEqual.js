const eqArrays = require("./eqArrays");

/*const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
*/

function assertArraysEqual(actual, expected) {
  var index = 0;
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      index++;
  }}  
  if (index === 0) {
    console.log('Assertion Passed :--> Expected "' + expected + '", and send "' + actual + '"');
  } else {
    console.log('Assertion Failed --> Expected "' + expected + '", but send "' + actual + '"');
  }};

assertArraysEqual([1, 2, 3], [1,2,3]);

assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);

module.exports = assertArraysEqual;
