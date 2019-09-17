const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(obj, val) {
  let allKeys = Object.keys(obj);

  for (let single of allKeys) {
    if (obj[single] === val) {
      return single;
    }
  }
};

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
