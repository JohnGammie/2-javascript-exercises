const palindromes = function (word) {
  let processedWord = processWord(word);
  let reversedProcessedWord = [...processedWord].reverse().join("");
  return processedWord == reversedProcessedWord;
};

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isNumber(n) {
  return !isNaN(n);
}

function removeWhiteSpace(word) {
    return [...word].filter((character) => character != ' ' );
}

function removeNonAlphaNumeric(word) {
  return [...word]
    .filter((letter) => isLetter(letter) || isNumber(letter))
    .join("");
}

function processWord(word) {
    let processedWord = word.toLowerCase();
    processedWord = removeWhiteSpace(processedWord);
    processedWord = removeNonAlphaNumeric(processedWord);
    return processedWord;
}

// Do not edit below this line
module.exports = palindromes;
