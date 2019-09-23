const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns and empty array...", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns [2]...", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [2,3]...", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns ['john']...", () => {
    assert.deepEqual(middle(["bill", "john", "greg"]), ["john"]);
  });
});