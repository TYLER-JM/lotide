const head = require("../head");
const assertEqual = require("../assertEqual");

//TESTING CODE
console.log(assertEqual(head([1,2,3]), 1));
console.log(assertEqual(head(["hello","goodbye","adeos"]), "hello"));