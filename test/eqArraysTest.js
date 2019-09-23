const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
const nested1 = [1, [2, 3, 4], 5, 6, [7, [8, 9]]];
const nested1Twin = [1, [2, 3, 4], 5, "6", [7, [8, 9]]];
const nested2 = [11, 12, [13], [14, [15, [16, 17], 18]], 19];
const nested2Twin = [11, 12, [13], [14, [15, [16, 17], 18]], 19];

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));

console.log(assertEqual(eqArrays(["1", ["2", "3"], "4"], ["1", ["2", "3"], "4"]), true));
console.log(assertEqual(eqArrays(nested1, nested2), false));
console.log(assertEqual(eqArrays(nested2Twin, nested2), true));
console.log(assertEqual(eqArrays(nested1, nested1Twin), false)); //changing the number 6 to a string "6" should have resulted in false?
console.log(assertEqual(eqArrays([3,4], nested2Twin), false));