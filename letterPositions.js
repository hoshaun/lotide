// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    if (sentence[i] === ' ') {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(Number(i));
    } else {
      results[sentence[i]] = [Number(i)];
    }
  }
  return results;
};

// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
// assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
// assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
// assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
// assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
// assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
// assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
// assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);

module.exports = letterPositions;