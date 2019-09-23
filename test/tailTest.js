const tail = require("../tail");
// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#middle", () => {
  it("length should be 3...", () => {
    assert.deepEqual(tail([2,4,6,8]).length, 3);
  });
  it("returns [2, 3]...", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it("returns [2,3,4]...", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3, 4]);
  });
  it("returns ['john', 'greg']...", () => {
    assert.deepEqual(tail(["bill", "john", "greg"]), ["john", "greg"]);
  });
});

//TEST CODE
// let testArray = [2,4,6,8];
// let singleArray = [];
// console.log(tail(singleArray));
// console.log(assertEqual(tail(testArray).length, 3));
// console.log(testArray, testArray.length);