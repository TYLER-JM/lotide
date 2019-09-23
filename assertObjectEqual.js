const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (eqObjects(actual, expected)) {
    return `${right} Passed, Objects Equal: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `${wrong} Failed, Objects NOT Equal: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual;