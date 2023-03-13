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

module.exports = countLetters;