const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"])));

module.exports = tail;

const assert = require('chai').assert;
describe("#tail", () => {
  it("returns labs for ["Hello", "Lighthouse", "Labs"]"), () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]));
  });
};
