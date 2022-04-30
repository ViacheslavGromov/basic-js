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
  let strLength = str.length
  let res = ''

  for (let i = 0; i < strLength; i++){
  let count = 1

      while (i < strLength - 1 && str[i] == str[i+1]) {
          count++;
          i++;
      }
       if (count === 1) res += `${count}${str[i]}`.replace(/1/g, '') // delete all 1 and pass the tests:))))
       else res += `${count}${str[i]}`

  }
  return res
}

module.exports = {
  encodeLine
};