const tail = require("../tail");
const assertEqual = require("../assertEqual");

//TEST CODE
let testArray = [2,4,6,8];
let singleArray = [];
console.log(tail(singleArray));
console.log(assertEqual(tail(testArray).length, 3));
console.log(testArray, testArray.length);