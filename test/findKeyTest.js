const findKey = require("../findkey");
const assertEqual = require("../assertEqual");

//TEST CODE
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({1: "one", 2: "two", 3: "three", 4: "four"}, x => x === "three");
const result3 = findKey({"feb": 2, "march": 3, "may": 5}, x => x === 1);

console.log(assertEqual(result1, "noma"));
console.log(assertEqual(result2, "3"));
console.log(assertEqual(result3, undefined));