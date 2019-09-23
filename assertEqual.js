const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;