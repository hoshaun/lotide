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

module.exports = letterPositions;