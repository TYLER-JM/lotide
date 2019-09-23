const assertArraysEqual = require("../assertArraysEqual");

//TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => pass
console.log(assertArraysEqual([1, 2, "3"], [1, 2, 3])); // => fail
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => fail
console.log(assertArraysEqual([1, 2, 3, 5], [3, 2, 1])); // => fail
console.log(assertArraysEqual(["john", "david", "maria"], ["john", "david", "maria"])); // => pass