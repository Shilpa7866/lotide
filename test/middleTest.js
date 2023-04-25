const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  describe("#middle", () => {
   it("return [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
   });
});
});
});

