const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letters = {};
  const str = sentence.split(' ').join('').toLowerCase();
  for (const char of str) {
    if (letters[char]) {
      letters[char]++;
    } else {
      letters[char] = 1;
    }
  }
  return letters;
};

assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});