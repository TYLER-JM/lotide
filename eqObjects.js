const eqArrays = require("./eqArrays");

let eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {

      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) return false;
      } else if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
        return eqObjects(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }

    }
  }
  return true;
};

module.exports = eqObjects;


