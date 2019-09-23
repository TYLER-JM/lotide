const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a, b) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (eqArrays(a, b)) {
    return `${right} Assertion Passed, Arrays Equal: ${a} | ${b}`;
  } else {
    return `${wrong} Assertion Failed, Arrays Not Equal: ${a} | ${b}`;
  }
};

module.exports = assertArraysEqual;