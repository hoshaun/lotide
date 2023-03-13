const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (typeof(object1) !== typeof(object2)) {
    return false;
  }

  if (typeof(object1) !== 'object') {
    return object1 === object2;
  }

  if (Array.isArray(object1)) {
    return eqArrays(object1, object2);
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) {
      return false;
    }
  }

  for (const key in object1) {
    return eqObjects(object1[key], object2[key]);
  }
};

module.exports = eqObjects;