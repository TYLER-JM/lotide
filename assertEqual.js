const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};

//TEST CODE
console.log(assertEqual("lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
console.log(assertEqual("yes", "yes"));
assertEqual(2,5);