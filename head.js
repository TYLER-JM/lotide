const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCharCode(0x2705);
  if (actual === expected) {
    
    //console.log(right + " Assertion Passed: " + actual + " === " + expected);
    console.log(`${right} Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log(wrong + " Assertion Failed: " + actual + " !== " + expected);
    console.log(`${wrong} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

//TESTING CODE
console.log(assertEqual(head([1,2,3]), 1));
console.log(assertEqual(head(["hello","goodbye","adeos"]), "hello"));