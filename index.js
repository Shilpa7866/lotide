const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const assertObjectsEqual = require('../assertObjectsEqual');
const eqArrays = require('../eqArrays');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays, 
  countLetters: countLetters,
  countOnly: this.countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  withOut: withOut,
  takeUntil: takeUntil,
  map: map

};
