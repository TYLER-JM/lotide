const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) return false;
    }
  }
  return true;
};

const assertArraysEqual = function(a, b) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (eqArrays(a, b)) {
    return `${right} Assertion Passed, Arrays Equal: ${a} | ${b}`;
  } else {
    return `${wrong} Assertion Failed, Arrays Not Equal: ${a} | ${b}`;
  }
};

const middle = function(arr) {
  let middleArr = [];
  let midPoint = Math.ceil(arr.length / 2) - 1;
  
  if (arr.length <= 2) {
    return middleArr;
  } else {
    middleArr.push(arr[midPoint]);
    if (midPoint === arr.length / 2 - 1) middleArr.push(arr[midPoint + 1]);
  }

  return middleArr;
};

// TEST CODE
console.log(assertArraysEqual(middle([1,2]), []));
console.log(assertArraysEqual(middle([1,2,3]), [2]));
console.log(assertArraysEqual(middle([1,2,3,4]), [2, 3]));
console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));