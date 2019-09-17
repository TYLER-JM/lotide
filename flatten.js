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

const flatten = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};


console.log(assertArraysEqual(flatten([[1,2], 3, [4,5]]), [1,2,3,4,5]));
console.log(assertArraysEqual(flatten([["john"], 3, ["jim",5]]), ["john",3,"jim",5]));
console.log(assertArraysEqual(flatten([[], 3, ["jim",5]]), [3,"jim",5]));