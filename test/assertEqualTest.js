const assertEqual = require('../assertEqual');

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 2));
console.log(assertEqual("apple", "banana"));
console.log(assertEqual(10, 10));
console.log(assertEqual("fruit", "fruit"));
// test changes
console.log(assertEqual("fruit", "vegetables"));
console.log(assertEqual("veggies", 22));

module.exports = assertEqual;