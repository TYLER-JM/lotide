const countLetters = function(string) {
  let final = {};
  let noSpaces = string.split(" ").join("").toLowerCase();
  
  for (const letter of noSpaces) {
    if (final[letter]) {
      final[letter] += 1;
    } else {
      final[letter] = 1;
    }
  }

  return final;
};

module.exports = countLetters;
