function assertArraysEqual(actual, expected) {
  let index = 0;
  for (const key in actual) {
    if (actual[key] !== expected[key]) {
      index++;
    }
  }
  if (index === 0) {
    console.log('Assertion Passed :--> Expected "' + expected + '", and send "' + actual + '"');
  } else {
    console.log('Assertion Failed --> Expected "' + expected + '", but send "' + actual + '"');
  }
};


module.exports = assertArraysEqual;
