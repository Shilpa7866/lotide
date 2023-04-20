
const assertEqual = require('./assertEqual');
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return "Assertion Passed: [actual] === [expected]";
  }
  else if (actual !== expected) {
      return "Assertion Failed: [actual] !== [expected]";
  }
};
*/

const tail = function(arr1) {
  let arr2 = [];
  for(let i=1; i<arr1.length; i++)
    arr2.push(arr1[i]);
  return arr2;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"])));


module.exports = tail;
