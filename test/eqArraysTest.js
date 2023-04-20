const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [4, 5, 6]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays([1, 2, 3], [1, 2, 3])); 
console.log(eqArrays([1, 2, 3], [3, 2, 1])); 
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [4, 5, 6]));




module.exports = eqArrays;