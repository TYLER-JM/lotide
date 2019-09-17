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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let wrong = String.fromCodePoint(0x274c);
  let right = String.fromCodePoint(0x2705);
  if (eqObjects(actual, expected)) {
    return `${right} Passed, Objects Equal: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `${wrong} Failed, Objects NOT Equal: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

//TEST CODE below
let ab = {a: "1", b: "2"};
let ba = {b: "2", a: "1"};
let abc = {a: "1", b: "2", c: "3"};
let names = {bob: 21, amir: 42, allen: 100};
let moreNames = {bob: 23, amir: 42, allen: 100};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cdcd = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(ab, ba)); //TRUE
console.log(assertObjectsEqual(ab, abc)); //FALSE
console.log(assertObjectsEqual(cd, dc));  //TRUE
console.log(assertObjectsEqual(cdcd, cd2)); //TRUE
console.log(assertObjectsEqual(names, moreNames));  //FALSE