const assertObjectsEqual = function (actual, expected) {
  var isEqual = false;
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    isEqual = false;
  } else {
    for (let key of keys1) {
      if (actual[key] === expected[key]) {
        isEqual = true;
      } else {
        isEqual = false;
        break;
      }
    }
  }
  if (isEqual) {
    console.log('✅✅✅ Assertion Passed: --> "' + expected + '" === "' + actual + '"');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: --> "' + expected + '" !== "' + actual + '"');
  }
};


module.exports = assertObjectsEqual;