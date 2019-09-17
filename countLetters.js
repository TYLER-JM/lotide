const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(string) {
  let final = {};
  let noSpaces = string.split(" ").join("").toLowerCase();
  
  for (const letter of noSpaces) {
    if (final[letter]) {
      final[letter] += 1;
    } else {
      final[letter] = 1;
    }
  }

  return final;
};

console.log(assertEqual(countLetters("aaccceefqffq").a, 2));
console.log(assertEqual(countLetters("AABBcCdD").a, 2));
console.log(assertEqual(countLetters("How many letters are ThERE").e, 5));