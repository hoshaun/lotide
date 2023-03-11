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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const i in object1) {
    if (!eqArrays(object1[i], object2[i])) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});