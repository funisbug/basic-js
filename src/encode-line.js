const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    let cnt = 0;

    for (let j = i; j < str.length; j += 1) {
      if (str[i] !== str[j]) {
        break;
      }
      cnt += 1;
    }
    result += cnt > 1 ? cnt + str[i] : str[i];
    i += cnt - 1;
  }

  return result;
}

module.exports = {
  encodeLine
};
