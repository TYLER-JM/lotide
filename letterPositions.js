// const eqArrays = function(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   } else {
//     for (let i = 0; i < first.length; i++) {
//       if (first[i] !== second[i]) return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(a, b) {
//   let wrong = String.fromCodePoint(0x274c);
//   let right = String.fromCodePoint(0x2705);
//   if (eqArrays(a, b)) {
//     return `${right} Assertion Passed, Arrays Equal: ${a} | ${b}`;
//   } else {
//     return `${wrong} Assertion Failed, Arrays Not Equal: ${a} | ${b}`;
//   }
// };

const letterPositions = function(sentence) {
  let final = {};
  let noSpace = sentence.split(" ").join("").toLowerCase();

  for (let i = 0; i < noSpace.length; i++) {
    if (final[noSpace[i]]) {
      final[noSpace[i]].push(i);
    } else {
      final[noSpace[i]] = [i];
    }
  }

  return final;
};
module.exports = letterPositions;