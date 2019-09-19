const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};

// returns the first key of the object which passes a test from the callback function
// the key is returned as a string
const findKey = function(ob, callback) {
  for (let key in ob) {
    if (callback(ob[key])) {
      return key;
    }
  }
};

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