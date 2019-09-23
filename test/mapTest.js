const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(["how", "many", "letters", "in", "these", "words"], word => word.toUpperCase());
const results3 = map([1,2,3,4], x => x * 2);
const results4 = map(["1", "2", "3"], x => parseInt(x));

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results2, ["HOW", "MANY", "LETTERS", "IN", "THESE", "WORDS"]));
console.log(assertArraysEqual(results3, [2, 4, 6, 8]));
console.log(assertArraysEqual(results4, [1,2,3]));