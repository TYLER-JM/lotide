const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

//TEST CODE
console.log(assertArraysEqual(flatten([[1,2], 3, [4,5]]), [1,2,3,4,5]));
console.log(assertArraysEqual(flatten([["john"], 3, ["jim",5]]), ["john",3,"jim",5]));
console.log(assertArraysEqual(flatten([[], 3, ["jim",5]]), [3,"jim",5]));