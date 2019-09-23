const assertEqual = function(actual, expected) {
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (actual === expected) {
    return `${right} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${wrong} Assertion Failed: ${actual} !== ${expected}`;
  }
};
const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    console.log('array length error: false because: ', arguments[0], 'not equals', arguments[1]);
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        console.log(first[i], second[i]);
        return false;
      }
    }
  }
  return true;
};

let eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {

      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) return false;
      } else if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
        return eqObjects(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }

    }
  }
  return true;
};

module.exports = eqObjects;


