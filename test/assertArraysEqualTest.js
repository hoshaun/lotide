//const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("should log Assertion Failed", () => {
  });
  it("", () => {
    assertArraysEqual([1, 2, 3], [3, 2, 1]);
    assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
  });

  it("should log Assertion Passed", () => {
  });
  it("", () => {
    assertArraysEqual([], []);
    assertArraysEqual([1, 2, 3], [1, 2, 3]);
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
  });
});