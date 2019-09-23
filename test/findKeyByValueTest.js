const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

//TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const nums = {
  one: 1,
  two: 2,
  three: 3
};

//TESTS
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(assertEqual(findKeyByValue(nums, 2), "two"));