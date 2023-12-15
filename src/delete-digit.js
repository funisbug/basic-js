const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberArray = n.toString().split('');
  const digitsArray = [];

  for (let i = 0; i < numberArray.length; i += 1) {
    digitsArray.push(Number(numberArray.slice(0, i).concat(numberArray.slice(i + 1, numberArray.length)).join('')));
  }

  return Math.max(...digitsArray);
}

module.exports = {
  deleteDigit
};
