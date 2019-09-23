// const assertArraysEqual = require("../assertArraysEqual");
const flatten = require('../flatten');
const assert = require('chai').assert;
describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5] when input is [1, [2, 3, 4], 5]', () => {
    assert.deepEqual(flatten([1, [2, 3, 4], 5]), [1, 2, 3, 4, 5]);
  });
  it('should return [1, 2, 3, 4, 5, 6] when input is [[1], 2, 3, [4, [5, 6]]]', () => {
    assert.deepEqual(flatten([[1], 2, 3, [4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
  });
  it('should return array length of 10 when input is [[1], [2, 3, 4], [5, 6], [7, [8, 9]], 10]', () => {
    assert.strictEqual(flatten([[1], [2, 3, 4], [5, 6], [7, [8, 9]], 10]).length, 10);
  });
});

//TEST CODE
// console.log(assertArraysEqual(flatten([[1,2], 3, [4,5]]), [1,2,3,4,5]));
// console.log(assertArraysEqual(flatten([["john"], 3, ["jim",5]]), ["john",3,"jim",5]));
// console.log(assertArraysEqual(flatten([[], 3, ["jim",5]]), [3,"jim",5]));


