const flatten = function(array) {
  let newArray = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      newArray = newArray.concat(flatten(item));
    } else {
      newArray.push(item);
    }
  });
  return newArray;
};

module.exports = flatten;