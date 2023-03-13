const assert = require('chai').assert;
const countOnly = require('../countOnly');
const inspect = require('util').inspect;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
  const result1 = {"Jason": 1, "Fang": 2};

  it(`returns ${inspect(result1)} for ${inspect(itemsToCount)}`, () => {
    assert.deepEqual(countOnly(firstNames, itemsToCount), result1);
  });
});