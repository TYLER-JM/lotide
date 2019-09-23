// returns the first key of the object which passes a test from the callback function
// the key is returned as a string
const findKey = function(ob, callback) {
  for (let key in ob) {
    if (callback(ob[key])) {
      return key;
    }
  }
};

module.exports = findKey;