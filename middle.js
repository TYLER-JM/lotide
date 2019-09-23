const middle = function(arr) {
  let middleArr = [];
  let midPoint = Math.ceil(arr.length / 2) - 1;
  
  if (arr.length <= 2) {
    return middleArr;
  } else {
    middleArr.push(arr[midPoint]);
    if (midPoint === arr.length / 2 - 1) middleArr.push(arr[midPoint + 1]);
  }

  return middleArr;
};

module.exports = middle;
