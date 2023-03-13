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

module.exports = flatten;