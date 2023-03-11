const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.length === 0) {
    return true;
  }

  if (!Array.isArray(arr1[0]) && !Array.isArray(arr2[0])) {
    return arr1[0] === arr2[0] && eqArrays(arr1.slice(1), arr2.slice(1));
  } else if (Array.isArray(arr1[0]) && Array.isArray(arr2[0])) {
    return eqArrays(arr1[0], arr2[0]) && eqArrays(arr1.slice(1), arr2.slice(1));
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]