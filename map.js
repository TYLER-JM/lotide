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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const results2 = map(["how", "many", "letters", "in", "these", "words"], word => word.toUpperCase());
const results3 = map([1,2,3,4], x => x * 2);
const results4 = map(["1", "2", "3"], x => parseInt(x));

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results2, ["HOW", "MANY", "LETTERS", "IN", "THESE", "WORDS"]));
console.log(assertArraysEqual(results3, [2, 4, 6, 8]));
console.log(assertArraysEqual(results4, [1,2,3]));