
const letterPositions = function(sentence) {
  let final = {};
  let noSpace = sentence.split(" ").join("").toLowerCase();

  for (let i = 0; i < noSpace.length; i++) {
    if (final[noSpace[i]]) {
      final[noSpace[i]].push(i);
    } else {
      final[noSpace[i]] = [i];
    }
  }

  return final;
};
module.exports = letterPositions;