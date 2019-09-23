const assertObjectsEqual = require("../assertObjectEqual");

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