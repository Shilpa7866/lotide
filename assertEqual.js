
const assertEqual = function(actual, expected) {
    if (actual === expected) {
        return "Assertion Passed: [actual] === [expected]";
    }
    else if (actual !== expected) {
        return "Assertion Failed: [actual] !== [expected]";
    }
};
console.log(assertEqual("lighthouse labs", "Bootcamp"));

console.log(assertEqual(1, 1));
console.log(assertEqual(1, -1));


module.exports = assertEqual;
