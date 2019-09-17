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

const without = function(source, itemsToRemove) {
  
  let final = source.slice(0);

  for (let i = 0; i < itemsToRemove.length; i++) {

    if (final.includes(itemsToRemove[i])) {
      final.splice(final.indexOf(itemsToRemove[i]), 1);
    }
  }
  return final;
};

// TEST
console.log(assertArraysEqual(without(["john", "jim", "daryl", "mike"], ["daryl", "mike"]), ["john", "jim"]));
console.log(assertArraysEqual(without([1,2,3,4,5], [1,2]), [3,4,5]));
console.log(assertArraysEqual(without([1,2,"3",4,5], ["3"]), [1,2,4,5]));
console.log(assertArraysEqual(without([1,2,3], ["1", "2", 3]), [1,2]));
console.log(assertArraysEqual(without([1,2,3], [4, 5]), [1,2,3]));
