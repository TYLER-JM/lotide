const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

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

const nested1 = { a: { z: 1 }, b: 2 };

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
console.log(assertEqual(eqObjects(cdcd, cd2), true));

console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(names, moreNames), false));
console.log(assertEqual(eqObjects(names, sameNames), true));

console.log(assertEqual(eqObjects(nested1, nested1), true));
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
console.log(assertEqual(eqObjects(nested1, cd), false));