// const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map([], x => x), []);
// assertArraysEqual(map([1], x => x), [1]);
// assertArraysEqual(map([1, 2, 3], x => x), [1, 2, 3]);

module.exports = map;