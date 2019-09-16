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

//TEST CODE
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("yes", "yes");
assertEqual(2,5);