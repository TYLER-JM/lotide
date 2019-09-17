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
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {

      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) return false;
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }

    }
  }
  return true;
};

// TEST CODE Below
let ab = {a: "1", b: "2"};
let ba = {b: "2", a: "1"};
let abc = {a: "1", b: "2", c: "3"};
let names = {bob: 21, amir: 42, allen: 100};
let sameNames = {bob: 21, amir: 42, allen: 100};
let moreNames = {bob: 23, amir: 42, allen: 100};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cdcd = { c: "1", d: ["2", 3, 4] };

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
console.log(assertEqual(eqObjects(cdcd, cd2), true));

console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(names, moreNames), false));
console.log(assertEqual(eqObjects(names, sameNames), true));