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

const middle = function(arr) {
  const midIndex = Math.ceil(arr.length / 2) - 1;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(midIndex, midIndex + 1);
  } else {
    return arr[midIndex];
  }
};

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));