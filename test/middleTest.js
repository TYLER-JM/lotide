const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
console.log(assertArraysEqual(middle([1,2]), []));
console.log(assertArraysEqual(middle([1,2,3]), [2]));
console.log(assertArraysEqual(middle([1,2,3,4]), [2, 3]));
console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));