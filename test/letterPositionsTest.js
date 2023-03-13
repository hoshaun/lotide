const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  const test1 = "lighthouse in the house";
  const result1 = {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  };
  
  it(`${result1} for ${test1}`, () => {
    assert.deepEqual(letterPositions(test1), result1);
  });
});