
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1', c: 3 });
assertObjectsEqual("lighthouse", "labs");
assertObjectsEqual("lighthouse", "lighthouse");

