
const letterPositions = function(sentence) {
  let final = {};
  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (final[sentence[i]]) {
      final[sentence[i]].push(i);
    } else {
      final[sentence[i]] = [i];
    }
  }

  return final;
};
module.exports = letterPositions;

console.log(letterPositions("hello"));
console.log(letterPositions("john TOM AlleN"));