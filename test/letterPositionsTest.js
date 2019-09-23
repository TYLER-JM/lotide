const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

//TEST CODE
console.log(assertArraysEqual(letterPositions("hello").l , [2,3]));
console.log(assertArraysEqual(letterPositions("johnJOHN").j , [0,4]));
console.log(assertArraysEqual(letterPositions("john TOM AlleN").n , [3,11]));