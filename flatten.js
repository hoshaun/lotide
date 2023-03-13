//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let result = [];
  for (const e of arr) {
    if (Array.isArray(e)) {
      for (const i of e) {
        result.push(i);
      }
    } else {
      result.push(e);
    }
  }
  return result;
};

//console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;