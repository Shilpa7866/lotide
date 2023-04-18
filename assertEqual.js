/*const sum = function(a, b) {
  return a + b;
}
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);
*/


/*const sumBuggy = function(a,b) {
        return a * b;
 }
 console.assert(sumBuggy(1,2)===3);
*/


const assertEqual = function(actual, expected) {
    if (actual === expected) {
        return "Assertion Passed: [actual] === [expected]";
    }
    else if (actual !== expected) {
        return "Assertion Failed: [actual] !== [expected]";
    }
};


console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 2));
console.log(assertEqual("apple", "banana"));
console.log(assertEqual(10, 10));
console.log(assertEqual("fruit", "fruit"));
// test changes
console.log(assertEqual("fruit", "vegetables"));
console.log(assertEqual("veggies", 22));


module.exports = assertEqual;
