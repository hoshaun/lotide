const middle = function(arr) {
  const midIndex = Math.ceil(arr.length / 2) - 1;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(midIndex, midIndex + 2);
  } else {
    return arr.slice(midIndex, midIndex + 1);
  }
};

module.exports = middle;