const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) return false;
    }
  }
  return true;
};

const assertArraysEqual = function(a, b) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (eqArrays(a, b)) {
    return `${right} Assertion Passed, Arrays Equal: ${a} | ${b}`;
  } else {
    return `${wrong} Assertion Failed, Arrays Not Equal: ${a} | ${b}`;
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, "3"], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual([1, 2, 3, 5], [3, 2, 1]));
console.log(assertArraysEqual(["john", "david", "maria"], ["john", "david", "maria"]));