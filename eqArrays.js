const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (Array.isArray(first[i]) && Array.isArray(second[i])) {
        return eqArrays(first[i], second[i]);
      } else if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;

