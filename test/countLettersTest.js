const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

//TEST CODE
console.log(assertEqual(countLetters("aaccceefqffq").a, 2));
console.log(assertEqual(countLetters("AABBcCdD").a, 2));
console.log(assertEqual(countLetters("How many letters are ThERE").e, 5));