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

const tail = function(arr) {
  let arrTail = [];

  for (let i = 1; i < arr.length; i++) {
    arrTail.push(arr[i]);
  }
  return arrTail;
};

//TEST CASES
//console.log(tail([1,2,3,4]));
//console.log(tail(["hello", "lighthouse", "labs", "goodbye"]));

let testArray = [2,4,6,8];
let singleArray = [];
console.log(tail(singleArray));
console.log(assertEqual(tail(testArray).length, 3));
console.log(testArray, testArray.length);
