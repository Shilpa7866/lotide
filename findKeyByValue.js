const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return "Assertion Passed: [actual] === [expected]";
  }
  else if (actual !== expected) {
      return "Assertion Failed: [actual] !== [expected]";
  }
};

const findKeyByValue = function(object, value){
let loop =Object.values(object)
let key = Object.keys(object)
let output = ""
for (let i= 0; i < loop.length;i ++){

if (loop[i] === value) {
  output = key[i]

}
}
return output
}
const bestTVShowsByGenre = {
sci_fi: "The Expanse",
comedy: "Brooklyn Nine-Nine",
drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));