const eqArrays = require("./eqArrays");
// const assertEqual = require("./assertEqual");

let eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {

      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) return false;
      } else if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
        if (!eqObjects(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }

    }
  }
  return true;
};

// const test3 = { a: { y: 0, z : { xx: 2}}, b: 2, c: { dd: 4, ee: 5}};
// const test4 = { b: 2, c: { dd: 4, ee: 4}, a: { y: 0, z : { xx: 2}} };
// const test5 = { a: { y: 0, z : [1, 2]}, b: 2, c: { dd: 4, ee: 5}};
// const test6 = { b: 2, c: { dd: 4, ee: 5}, a: { y: 0, z : [1, 2]}};
// const nested1 = { a: { z: 1 }, b: 2 };
// const cd = { c: "1", d: ["2", 3] };

// console.log(eqObjects(test3, test4));

// console.log(assertEqual(eqObjects(nested1, nested1), true));
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
// console.log(assertEqual(eqObjects(nested1, cd), false));
// console.log(assertEqual(eqObjects(test5, test6), true));


module.exports = eqObjects;


