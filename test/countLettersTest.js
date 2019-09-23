// const countLetters = require("../countLetters");

//TEST CODE
// console.log(assertEqual(countLetters("aaccceefqffq").a, 2));
// console.log(assertEqual(countLetters("AABBcCdD").a, 2));
// console.log(assertEqual(countLetters("How many letters are ThERE").e, 5));

const countLetters = require('../countLetters');
const assert = require('chai').assert;
describe('#countLetters', () => {
  it('should return 4 for letter h in lighthouse in the house', () => {
    assert.strictEqual(countLetters('lighthouse in the house').h, 4);
  });
  it('should return undefined for letter m in hello', () => {
    assert.isUndefined(countLetters('hello').m);
  });
  it("should return object for the function's return value", () => {
    assert.isObject(countLetters('hello'));
  });
  it("should not count spaces", () => {
    assert.doesNotHaveAnyKeys(countLetters('hello how are you'), [' ']);
  });
});