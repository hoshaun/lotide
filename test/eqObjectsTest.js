const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const inspect = require('util').inspect;

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  
  it(`returns false for (${inspect(multiColorShirtObject)}, ${inspect(longSleeveMultiColorShirtObject)})`, () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
  it(`returns true for (${inspect(multiColorShirtObject)}, ${inspect(anotherMultiColorShirtObject)})`, () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });
  it(`returns false for (${inspect(shirtObject)}, ${inspect(longSleeveShirtObject)})`, () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  it(`returns true for (${inspect(shirtObject)}, ${inspect(anotherShirtObject)})`, () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it(`returns true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 )})`, () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it(`returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 )})`, () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it(`returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 )})`, () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it(`returns true for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 )})`, () => {
    assert.isTrue(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }));
  });
});