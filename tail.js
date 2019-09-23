const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let arrTail = [];

  for (let i = 1; i < arr.length; i++) {
    arrTail.push(arr[i]);
  }
  return arrTail;
};

module.exports = tail;
