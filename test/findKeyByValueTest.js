const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const inspect = require('util').inspect;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it(`"drama" for (${inspect(bestTVShowsByGenre)}, "The Wire")`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it(`undefined for (${inspect(bestTVShowsByGenre)}, "That '70s Show")`, () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});