const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// TEST
console.log(assertArraysEqual(without(["john", "jim", "daryl", "mike"], ["daryl", "mike"]), ["john", "jim"]));
console.log(assertArraysEqual(without([1,2,3,4,5], [1,2]), [3,4,5]));
console.log(assertArraysEqual(without([1,2,"3",4,5], ["3"]), [1,2,4,5]));
console.log(assertArraysEqual(without([1,2,3], ["1", "2", 3]), [1,2]));
console.log(assertArraysEqual(without([1,2,3], [4, 5]), [1,2,3]));
