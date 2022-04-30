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
  if (!options.separator) options.separator = '+'
  if (!options.repeatTimes) options.repeatTimes = 1
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1
  if (!options.additionSeparator) options.additionSeparator = '|'
  options.addition === undefined ? options.addition = '' : options.addition = String(options.addition);
  str !== null ? str : str = `${str}`
  let res = []

    for (let i = 0; i < options.repeatTimes; i++) {
        res.push(str)

        for (let i = 0; i < options.additionRepeatTimes; i++) {
            res.push(options.addition)
            if (i !== options.additionRepeatTimes - 1) res.push(options.additionSeparator)

        }
        if (i !== options.repeatTimes - 1) res.push(options.separator)
    }

    return res.join('')


}

module.exports = {
  repeater
};
// npm run test ./test/extended-repeater.test.js