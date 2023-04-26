// import assertEqual function.
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); //failed! non identical strings. 
assertEqual(1, 2);  // failed
assertEqual("apple", "banana");  //failed
assertEqual(10, 10);   //passed
assertEqual("fruit", "fruit");  //passed! identical strings.

module.exports = assertEqual;