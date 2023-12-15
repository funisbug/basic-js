const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const result = [];
  const repeatTimes = options.repeatTimes ?? 1;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  
  if (str === null && options.addition === null) {
    str = 'null';
    options.addition = 'null';
  }
  
  for (let i = 0; i < repeatTimes; i += 1) {
    let additionArray = [];
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      additionArray.push(options.addition);
    }
    result.push(str + ((additionArray.join(options.additionSeparator ?? '|'))));
  }

  return result.join(options.separator ?? '+'); 
}

module.exports = {
  repeater
};
