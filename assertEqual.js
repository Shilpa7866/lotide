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


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual("apple", "banana");
assertEqual(10, 10);
assertEqual("fruit", "fruit");

